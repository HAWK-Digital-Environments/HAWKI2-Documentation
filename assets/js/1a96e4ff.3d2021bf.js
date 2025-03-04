"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[287],{7173:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"HAWKI/Architecture/Authentication","title":"Authentication","description":"Overview","source":"@site/docs/HAWKI/3-Architecture/8-Authentication.md","sourceDirName":"HAWKI/3-Architecture","slug":"/HAWKI/Architecture/Authentication","permalink":"/HAWKI/Architecture/Authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/hawk/your-project/edit/main/docs/HAWKI/3-Architecture/8-Authentication.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"HAWKI_Sidebar","previous":{"title":"Mail Service","permalink":"/HAWKI/Architecture/Mail Service"},"next":{"title":"dot Env","permalink":"/HAWKI/Architecture/dot Env"}}');var s=i(4848),r=i(8453);const o={sidebar_position:8},c=void 0,l={},a=[{value:"Overview",id:"overview",level:2},{value:"Authentication Methods",id:"authentication-methods",level:2},{value:"Authentication Flow",id:"authentication-flow",level:2},{value:"Initial Authentication Process",id:"initial-authentication-process",level:3},{value:"Registration Process (New Users)",id:"registration-process-new-users",level:3},{value:"Handshake Process (Returning Users)",id:"handshake-process-returning-users",level:3},{value:"Authentication Technologies",id:"authentication-technologies",level:2},{value:"LDAP Authentication",id:"ldap-authentication",level:3},{value:"Shibboleth Authentication",id:"shibboleth-authentication",level:3},{value:"OpenID Connect (OIDC)",id:"openid-connect-oidc",level:3},{value:"Test Authentication",id:"test-authentication",level:3},{value:"Laravel Sanctum Integration",id:"laravel-sanctum-integration",level:3},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Configuration and Customization",id:"configuration-and-customization",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"HAWKI2 implements a sophisticated and flexible authentication system that supports multiple\nauthentication methods while maintaining end-to-end encryption. The system integrates with various\nenterprise identity providers while ensuring secure key management and user privacy."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"authentication-methods",children:"Authentication Methods"}),"\n",(0,s.jsxs)(n.p,{children:["HAWKI2 supports four authentication methods, configurable via the ",(0,s.jsx)(n.code,{children:"AUTHENTICATION_METHOD"})," environment\nvariable:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"LDAP Authentication"}),"\n",(0,s.jsx)(n.li,{children:"Shibboleth Authentication"}),"\n",(0,s.jsx)(n.li,{children:"OpenID Connect (OIDC)"}),"\n",(0,s.jsx)(n.li,{children:"Test Authentication (for development purposes)"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"authentication-flow",children:"Authentication Flow"}),"\n",(0,s.jsx)(n.h3,{id:"initial-authentication-process",children:"Initial Authentication Process"}),"\n",(0,s.jsx)(n.p,{children:"Regardless of the authentication method, the authentication flow follows these steps:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Identity Provider Authentication"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"User submits credentials to the selected identity provider"}),"\n",(0,s.jsx)(n.li,{children:"The identity provider validates credentials and returns user information"}),"\n",(0,s.jsx)(n.li,{children:"This verification happens without exposing credentials to HAWKI2's application logic"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. User Status Determination"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"System checks if the user exists in the HAWKI2 database"}),"\n",(0,s.jsx)(n.li,{children:"For existing users: redirected to /handshake for keychain synchronization"}),"\n",(0,s.jsx)(n.li,{children:"For new users: redirected to /register for setting up encryption keys"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Session Establishment"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Upon successful authentication, Laravel's session-based authentication is established"}),"\n",(0,s.jsx)(n.li,{children:"CSRF tokens are regenerated for security"}),"\n",(0,s.jsx)(n.li,{children:"Session information is maintained with Laravel Sanctum"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"registration-process-new-users",children:"Registration Process (New Users)"}),"\n",(0,s.jsx)(n.p,{children:"For new users, the system follows these additional steps:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. User Information Storage"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Identity provider information is stored in the session"}),"\n",(0,s.jsx)(n.li,{children:"User is guided through the passkey creation process"}),"\n",(0,s.jsxs)(n.li,{children:["Cryptographic key pair is generated client-side\n",(0,s.jsx)(n.strong,{children:"2. Key Registration"})]}),"\n",(0,s.jsx)(n.li,{children:"User's public key is stored in the database"}),"\n",(0,s.jsx)(n.li,{children:"Private key and keychain are encrypted client-side"}),"\n",(0,s.jsxs)(n.li,{children:["Encrypted keychain is backed up on the server\n",(0,s.jsx)(n.strong,{children:"3. Account Creation"})]}),"\n",(0,s.jsx)(n.li,{children:"The completeRegistration method finalizes user account setup"}),"\n",(0,s.jsx)(n.li,{children:"User is redirected to the application's main interface"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"handshake-process-returning-users",children:"Handshake Process (Returning Users)"}),"\n",(0,s.jsx)(n.p,{children:'For returning users, a secure "handshake" process enables secure access to their encrypted data:'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Keychain Retrieval"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The encrypted keychain is retrieved from the server"}),"\n",(0,s.jsx)(n.li,{children:"User provides their passkey to decrypt the keychain"}),"\n",(0,s.jsx)(n.li,{children:"Client-side decryption prevents exposure of private keys"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Keychain Synchronization"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Local and server keychains are compared and synchronized"}),"\n",(0,s.jsx)(n.li,{children:"Most recent version is determined through timestamp comparison"}),"\n",(0,s.jsx)(n.li,{children:"Updates are applied if necessary"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"authentication-technologies",children:"Authentication Technologies"}),"\n",(0,s.jsx)(n.h3,{id:"ldap-authentication",children:"LDAP Authentication"}),"\n",(0,s.jsx)(n.p,{children:"Implemented in LdapService.php, this service:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Connects to Enterprise Directory Servers"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Uses standard LDAP protocol (PHP's native LDAP functions)"}),"\n",(0,s.jsx)(n.li,{children:"Configured with server host, port, and binding credentials"}),"\n",(0,s.jsx)(n.li,{children:"Searches for users based on configurable filters"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Authenticates Users"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Performs two-step LDAP binding (admin bind + user bind)"}),"\n",(0,s.jsx)(n.li,{children:"Extracts user attributes from LDAP response"}),"\n",(0,s.jsx)(n.li,{children:"Maps LDAP attributes to application user properties using configuration"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Configuration"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Detailed settings in config/ldap.php"}),"\n",(0,s.jsx)(n.li,{children:"Attribute mapping for organizational integration"}),"\n",(0,s.jsx)(n.li,{children:"Support for secure LDAP with TLS"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"shibboleth-authentication",children:"Shibboleth Authentication"}),"\n",(0,s.jsx)(n.p,{children:"Implemented in ShibbolethService.php, this federates authentication:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Service Provider Integration"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Works with Shibboleth SP module"}),"\n",(0,s.jsx)(n.li,{children:"Reads user attributes from server variables"}),"\n",(0,s.jsx)(n.li,{children:"Handles SP-initiated SSO flows"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. User Provisioning"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creates or updates users based on Shibboleth attributes"}),"\n",(0,s.jsx)(n.li,{children:"Generates random passwords for local account security"}),"\n",(0,s.jsx)(n.li,{children:"Redirects to the configured Shibboleth login path when needed"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Security Features"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Session regeneration for protection against session fixation"}),"\n",(0,s.jsx)(n.li,{children:"Support for Shibboleth's secure logout process"}),"\n",(0,s.jsx)(n.li,{children:"Integration with enterprise identity federations"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"openid-connect-oidc",children:"OpenID Connect (OIDC)"}),"\n",(0,s.jsx)(n.p,{children:"Implemented in OidcService.php, this provides modern OAuth2-based authentication:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Standards Compliance"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Follows OpenID Connect specifications"}),"\n",(0,s.jsx)(n.li,{children:"Uses the jumbojett/openid-connect-php library"}),"\n",(0,s.jsx)(n.li,{children:"Supports multiple scopes (profile, email)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Token Handling"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Manages authentication and ID tokens"}),"\n",(0,s.jsx)(n.li,{children:"Retrieves user information from OIDC endpoints"}),"\n",(0,s.jsx)(n.li,{children:"Handles token refresh and validation"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Provider Integration"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Configurable for various OIDC providers"}),"\n",(0,s.jsx)(n.li,{children:"Support for test environments with insecure HTTP"}),"\n",(0,s.jsx)(n.li,{children:"Extracts standardized claims for user identity"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"test-authentication",children:"Test Authentication"}),"\n",(0,s.jsx)(n.p,{children:"Implemented in TestAuthService.php, this provides development convenience:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Simplified Testing"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Configuration-based test users"}),"\n",(0,s.jsx)(n.li,{children:"No external dependencies for local development"}),"\n",(0,s.jsx)(n.li,{children:"Can be activated alongside production methods"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"laravel-sanctum-integration",children:"Laravel Sanctum Integration"}),"\n",(0,s.jsx)(n.p,{children:"HAWKI2 uses Laravel Sanctum for API authentication and protection:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Session Authentication"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Secure cookies for web-based session management"}),"\n",(0,s.jsx)(n.li,{children:"CSRF protection against cross-site request forgery"}),"\n",(0,s.jsx)(n.li,{children:"Customizable session timeouts"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. API Token Authentication"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Optional personal access tokens for API access"}),"\n",(0,s.jsx)(n.li,{children:"Defined in config/sanctum.php"}),"\n",(0,s.jsx)(n.li,{children:"Support for token abilities (scopes)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. WebSocket Authentication"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Secures WebSocket connections for real-time features"}),"\n",(0,s.jsx)(n.li,{children:"Authenticates private channels for secure messaging"}),"\n",(0,s.jsx)(n.li,{children:"Prevents unauthorized access to room channels"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Credential Isolation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Authentication credentials never touch application storage"}),"\n",(0,s.jsx)(n.li,{children:"Only identity assertions from trusted providers are used"}),"\n",(0,s.jsx)(n.li,{children:"No password storage or handling in the application"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Session Security"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Session regeneration prevents session fixation attacks"}),"\n",(0,s.jsx)(n.li,{children:"Encrypted cookies protect session data"}),"\n",(0,s.jsx)(n.li,{children:"Session expiry checking through middleware"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Authentication Chain"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Multi-step authentication process"}),"\n",(0,s.jsx)(n.li,{children:"Independent cryptographic verification layers"}),"\n",(0,s.jsx)(n.li,{children:"Separation of authentication and authorization"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"4. Route Protection"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Middleware stack for route protection:"}),"\n",(0,s.jsx)(n.li,{children:"auth: Base authentication check"}),"\n",(0,s.jsx)(n.li,{children:"expiry_check: Session timeout verification"}),"\n",(0,s.jsx)(n.li,{children:"roomEditor/roomAdmin: Role-based access control"}),"\n",(0,s.jsx)(n.li,{children:"registrationAccess: Controls registration flow"}),"\n",(0,s.jsx)(n.li,{children:"prevent_back: Prevents back-button security issues"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-and-customization",children:"Configuration and Customization"}),"\n",(0,s.jsx)(n.p,{children:"The authentication system can be configured through:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Environment Variables"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AUTHENTICATION_METHOD: Primary auth method"}),"\n",(0,s.jsx)(n.li,{children:"Method-specific configurations (LDAP_HOST, OIDC_IDP, etc.)"}),"\n",(0,s.jsx)(n.li,{children:"Timeout and security parameters"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Config Files"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"config/auth.php: Core authentication configuration"}),"\n",(0,s.jsx)(n.li,{children:"config/sanctum.php: API authentication settings"}),"\n",(0,s.jsx)(n.li,{children:"config/ldap.php: LDAP connection details"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Service Customization"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Each authentication service is encapsulated in its own class"}),"\n",(0,s.jsx)(n.li,{children:"Dependency injection allows for service replacement"}),"\n",(0,s.jsx)(n.li,{children:"Error handling is centralized in the AuthenticationController"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This comprehensive authentication system ensures HAWKI2 can integrate with enterprise identity systems\nwhile maintaining its end-to-end encryption model and the security of user keys and data."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);