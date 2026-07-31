1. Async Workflow Checklist: Document Lifecycle
In a SaaS application like Klodr, actions often happen "in the background." This checklist ensures the entire chain of events—from sending a document to the final webhook—is verified.
Step 1: Document Send (Initiation)
oVerify the frontend POST request to API Gateway returns a 202 Accepted or 201 Created status.
oConfirm the document is successfully stored in Amazon S3 with the correct permissions.
oVerify a new record is created in the Database with an "In Progress" or "Pending" status.
Step 2: Notification (Messaging)
oCheck that a message is placed into the SQS Queue for the notification service.
oConfirm the Lambda function responsible for notifications triggers correctly.
oVerify the recipient receives the correct Email or SMS with a valid signing link.
Step 3: Signer Completion (Execution)
oVerify the signer can open the document and the UI reflects their actions in real-time.
oConfirm that upon completion, the system updates the Database status to "Signed" or "Completed".
oCheck CloudWatch Logs to ensure the signing event was processed without internal errors.
Step 4: Webhook Callback (Integration)
oVerify the platform sends a POST request to the pre-configured webhook URL.
oConfirm the webhook payload contains the correct Document ID and Status.
oFailure Check: If the webhook endpoint is down, verify the system retries the callback according to the defined policy.

2. AWS/Serverless QA Checklist
This checklist covers the technical components of a serverless stack. 

API Gateway & Lambda
Status Codes: Ensure proper mapping of backend errors to HTTP status codes (e.g., Lambda timeout = 504 Gateway Timeout).
Payload Validation: Verify the Lambda handler correctly extracts and validates incoming event data before passing it to business logic.
Cold Starts: Observe if the first request after inactivity is significantly slower (Performance risk).
Isolation: Test business logic functions independently of the Lambda runtime to ensure "clean" logic.
Queues (SQS) & S3
Idempotency: Verify that if a message is processed twice (due to a retry), it does not create duplicate records in the DB.
Dead Letter Queues (DLQ): Confirm that messages which fail multiple times are moved to a DLQ for manual inspection.
S3 Validation: Ensure the system rejects unsupported file types or files exceeding size limits before they reach the processing Lambda.
Database & Logs
Data Integrity: Verify that the database schema matches the API's expected response structure.
Log Traceability: Ensure each async request has a Correlation ID that can be followed through API Gateway, Lambda, and SQS logs.
Sensitive Data: Check that sensitive user info (passwords, tokens) is not being printed in plain text in CloudWatch logs.
Failure & Retries (The "Sad Path")
Service Downtime: Simulate a database or S3 failure to see if the application provides a user-friendly error message or handles it gracefully in the background.
Retry Logic: Verify that transient network errors trigger automatic retries without failing the entire workflow.
