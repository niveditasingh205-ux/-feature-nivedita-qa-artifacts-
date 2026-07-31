Safe Security Checklist for SaaS Applications

1. Authentication (Auth)
Password Policy: Verify that the system enforces minimum length and complexity (e.g., special characters, numbers).
Secure Transit: Ensure all credentials and tokens are sent over encrypted HTTPS connections (TLS).
Login Feedback: Check that the application does not reveal whether the username or password was specifically incorrect (e.g., use "Invalid credentials" instead of "User not found") 

2. Role-Based Access Control (RBAC)
Vertical Privilege: Verify that a standard "Staff" user cannot access "Admin" or "Salon Owner" settings.
Horizontal Privilege: Ensure one user cannot view or edit another user's documents or salon data.
Unauthorized Access: Attempt to access internal dashboard URLs (like /admin) directly without logging in to ensure the system redirects to the login page 

3. Session Management
Session Timeout: Verify that the application automatically logs the user out after a period of inactivity.
Session Invalidation: Ensure that clicking "Logout" fully destroys the session and that the "Back" button does not show sensitive data.
Cookie Security: Use Browser DevTools to check if session cookies are marked as Secure and HttpOnly.

4. File Upload Validation
Type Restriction: Verify the system only allows supported file types (e.g., PDF, PNG) and rejects dangerous files like .exe or .js.
Size Limits: Ensure the system rejects files that exceed a specific size threshold to prevent server strain.

5. Error Handling
Generic Messages: Check that error messages are user-friendly and do not reveal technical stack details, database queries, or server paths.
No Console Leaks: Ensure that successful or failed requests do not print sensitive debugging information to the browser's console.

6. Sensitive Data Display
Masking: Verify that sensitive fields (like  passwords) are masked in the UI.
Data Exposure: Check the "Network" and "Response" tabs in DevTools to ensure the API is not sending more user data than is actually required for the screen.
Token Exposure: Ensure Bearer tokens or API keys are not visible in the URL as query parameters
