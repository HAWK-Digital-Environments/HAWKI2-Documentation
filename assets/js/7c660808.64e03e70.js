"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[725],{3571:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"HAWKI/Architecture/HAWKI_API","title":"HAWKI API Documentation","description":"Overview","source":"@site/docs/HAWKI/3-Architecture/11-HAWKI_API.md","sourceDirName":"HAWKI/3-Architecture","slug":"/HAWKI/Architecture/HAWKI_API","permalink":"/HAWKI2-Documentation/HAWKI/Architecture/HAWKI_API","draft":false,"unlisted":false,"editUrl":"https://github.com/hawk/your-project/edit/main/docs/HAWKI/3-Architecture/11-HAWKI_API.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{},"sidebar":"HAWKI_Sidebar","previous":{"title":"dot Env","permalink":"/HAWKI2-Documentation/HAWKI/Architecture/dot Env"},"next":{"title":"HAWKI CLI","permalink":"/HAWKI2-Documentation/HAWKI/Architecture/HAWKI_CLI"}}');var r=i(4848),t=i(8453);const o={},a="HAWKI API Documentation",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Authentication",id:"authentication",level:2},{value:"API Tokens",id:"api-tokens",level:3},{value:"Using Tokens",id:"using-tokens",level:3},{value:"Token Management",id:"token-management",level:3},{value:"Web API",id:"web-api",level:4},{value:"Command Line Interface",id:"command-line-interface",level:4},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"User Information",id:"user-information",level:3},{value:"AI Model Request",id:"ai-model-request",level:3},{value:"Request Body",id:"request-body",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Response",id:"response",level:4},{value:"Error Handling",id:"error-handling",level:2},{value:"Usage Tracking",id:"usage-tracking",level:2},{value:"Configuration",id:"configuration",level:2},{value:"External API Configuration",id:"external-api-configuration",level:3},{value:"Available Models",id:"available-models",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"cURL Example",id:"curl-example",level:3},{value:"JavaScript Example",id:"javascript-example",level:3},{value:"Administration",id:"administration",level:2},{value:"Command Line Token Management",id:"command-line-token-management",level:3},{value:"User Management",id:"user-management",level:3},{value:"Security Best Practices",id:"security-best-practices",level:3},{value:"Support",id:"support",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"hawki-api-documentation",children:"HAWKI API Documentation"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The HAWKI API provides access to AI model capabilities through a secure, token-based authentication system. This documentation outlines how to integrate with HAWKI's API, allowing external applications to leverage HAWKI's AI functionality."}),"\n",(0,r.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsx)(n.p,{children:"HAWKI uses Laravel Sanctum for API authentication, which provides a lightweight way to authenticate single-page applications, mobile applications, and simple token-based APIs."}),"\n",(0,r.jsx)(n.h3,{id:"api-tokens",children:"API Tokens"}),"\n",(0,r.jsx)(n.p,{children:"To use the HAWKI API, you need a personal access token:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Log in to your HAWKI account"}),"\n",(0,r.jsx)(n.li,{children:"Navigate to your Profile"}),"\n",(0,r.jsx)(n.li,{children:'In the "API Tokens" section, create a new token with a descriptive name'}),"\n",(0,r.jsx)(n.li,{children:"Store the generated token securely - it will only be shown once"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": Token creation via the web interface may be disabled by administrators. In this case, you will need to contact your system administrator to create an API token for you."]}),"\n",(0,r.jsx)(n.h3,{id:"using-tokens",children:"Using Tokens"}),"\n",(0,r.jsx)(n.p,{children:"Include your token in all API requests using the Authorization header:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Authorization: Bearer YOUR_TOKEN_HERE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"token-management",children:"Token Management"}),"\n",(0,r.jsx)(n.h4,{id:"web-api",children:"Web API"}),"\n",(0,r.jsx)(n.p,{children:"HAWKI provides web endpoints for token management:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Create Token"}),": ",(0,r.jsx)(n.code,{children:"POST /req/profile/create-token"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Body: ",(0,r.jsx)(n.code,{children:'{ "name": "Token Name" }'})]}),"\n",(0,r.jsx)(n.li,{children:"Returns: Token details including the plain text token"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"List Tokens"}),": ",(0,r.jsx)(n.code,{children:"GET /req/profile/fetch-tokens"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns: List of your active tokens"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Revoke Token"}),": ",(0,r.jsx)(n.code,{children:"POST /req/profile/revoke-token"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Body: ",(0,r.jsx)(n.code,{children:'{ "tokenId": 123 }'})]}),"\n",(0,r.jsx)(n.li,{children:"Permanently revokes the specified token"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"command-line-interface",children:"Command Line Interface"}),"\n",(0,r.jsx)(n.p,{children:"Administrators can manage API tokens for users through the command line:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Using Artisan Commands"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Create a token\nphp artisan app:token\n\n# Revoke a token\nphp artisan app:token --revoke\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Using HAWKI CLI"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Create a token\nphp hawki token\n\n# Revoke a token\nphp hawki token --revoke\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Both methods provide an interactive interface to select a user by username, email address, or user ID, then prompt for token creation or revocation."}),"\n",(0,r.jsx)(n.h2,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,r.jsx)(n.h3,{id:"user-information",children:"User Information"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /api/user\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns information about the authenticated user."}),"\n",(0,r.jsx)(n.h3,{id:"ai-model-request",children:"AI Model Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"POST /api/ai-req\n"})}),"\n",(0,r.jsx)(n.p,{children:"Send a request to an AI model and receive a response."}),"\n",(0,r.jsx)(n.h4,{id:"request-body",children:"Request Body"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "payload": {\n    "model": "model-name",\n    "messages": [\n      {\n        "role": "system",\n        "content": {\n          "text": "You are a helpful assistant."\n        }\n      },\n      {\n        "role": "user",\n        "content": {\n          "text": "Hello, how are you today?"\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"payload.model"}),' (required): The model ID to use (e.g., "gpt-4o", "meta-llama-3.1-70b-instruct")']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"payload.messages"})," (required): Array of message objects in the conversation","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"role"}),' (required): "system", "user", or "assistant"']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"content.text"})," (required): The message content"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "content": {\n    "text": "I\'m doing well, thank you for asking! How can I help you today?"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,r.jsx)(n.p,{children:"The API returns standard HTTP status codes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"200 OK"}),": Request successful"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"401 Unauthorized"}),": Invalid or missing authentication token"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"403 Forbidden"}),": External API access is disabled or you lack permissions"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"422 Unprocessable Entity"}),": Validation errors in the request body"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"500 Internal Server Error"}),": Server-side error"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For validation errors (422), detailed error information is returned:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "success": false,\n  "message": "Validation Error",\n  "errors": {\n    "payload.model": ["The model field is required"]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"usage-tracking",children:"Usage Tracking"}),"\n",(0,r.jsx)(n.p,{children:"All API requests are tracked and count toward your usage limits. Usage records include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Model used"}),"\n",(0,r.jsx)(n.li,{children:"Input and output tokens"}),"\n",(0,r.jsx)(n.li,{children:"Context (API usage)"}),"\n",(0,r.jsx)(n.li,{children:"Timestamp"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"external-api-configuration",children:"External API Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Two environment variables control API access in HAWKI:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ALLOW_EXTERNAL_COMMUNICATION"}),": Controls whether external API requests are allowed at all."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"true"}),": External API requests are permitted"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"false"}),": All external API requests are blocked"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ALLOW_USER_TOKEN_CREATION"}),": Controls whether users can create their own API tokens via the web interface."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"true"}),": Users can create, view, and revoke their own API tokens"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"false"}),": Only system administrators can create API tokens through command line tools"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["These settings can be configured in your HAWKI environment configuration (",(0,r.jsx)(n.code,{children:".env"})," file):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ALLOW_EXTERNAL_COMMUNICATION=true\nALLOW_USER_TOKEN_CREATION=true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"ALLOW_USER_TOKEN_CREATION"})," is set to ",(0,r.jsx)(n.code,{children:"false"}),", users will see a message indicating that token creation is disabled and they should contact their administrator for API access."]}),"\n",(0,r.jsx)(n.h2,{id:"available-models",children:"Available Models"}),"\n",(0,r.jsx)(n.p,{children:"The available models depend on your HAWKI installation's configuration. Common models include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OpenAI: gpt-4o, gpt-4o-mini, o1-mini"}),"\n",(0,r.jsx)(n.li,{children:"GWDG: meta-llama-3.1-8b-instruct, meta-llama-3.1-70b-instruct, mistral-large-instruct"}),"\n",(0,r.jsx)(n.li,{children:"Google: gemini-1.5-flash, gemini-2.0-flash-lite, gemini-2.5-pro-exp-03-25"}),"\n",(0,r.jsx)(n.li,{children:"Local models (if configured): Ollama or OpenWebUI models"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To see the current list of available models and their capabilities, check your HAWKI configuration or consult with your administrator."}),"\n",(0,r.jsx)(n.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,r.jsx)(n.p,{children:"API requests may be subject to rate limiting based on your organization's policies and the configured AI providers' limitations."}),"\n",(0,r.jsx)(n.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Never share your API tokens"}),"\n",(0,r.jsx)(n.li,{children:"Revoke tokens immediately if compromised"}),"\n",(0,r.jsx)(n.li,{children:"All API communication should use HTTPS"}),"\n",(0,r.jsx)(n.li,{children:"Keep your integration code updated with the latest security practices"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(n.h3,{id:"curl-example",children:"cURL Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST https://your-hawki-instance.com/api/ai-req \\\n  -H "Authorization: Bearer YOUR_TOKEN_HERE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "payload": {\n      "model": "gpt-4o",\n      "messages": [\n        {\n          "role": "user",\n          "content": {\n            "text": "Summarize the key features of quantum computing."\n          }\n        }\n      ]\n    }\n  }\'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"javascript-example",children:"JavaScript Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function queryHawkiAPI() {\n  const response = await fetch('https://your-hawki-instance.com/api/ai-req', {\n    method: 'POST',\n    headers: {\n      'Authorization': 'Bearer YOUR_TOKEN_HERE',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      payload: {\n        model: 'gpt-4o',\n        messages: [\n          {\n            role: 'user',\n            content: {\n              text: 'Explain the concept of neural networks in simple terms.'\n            }\n          }\n        ]\n      }\n    })\n  });\n  \n  const data = await response.json();\n  return data;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"administration",children:"Administration"}),"\n",(0,r.jsx)(n.h3,{id:"command-line-token-management",children:"Command Line Token Management"}),"\n",(0,r.jsx)(n.p,{children:"HAWKI administrators can manage API tokens through the command line interface, which is particularly useful for:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Creating tokens for users in a headless environment"}),"\n",(0,r.jsx)(n.li,{children:"Automating token generation for system integration"}),"\n",(0,r.jsx)(n.li,{children:"Bulk management of tokens for multiple users"}),"\n",(0,r.jsx)(n.li,{children:"Creating tokens when user token creation is disabled"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The commands can be run either through Laravel's Artisan or the HAWKI CLI tool:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using Artisan\nphp artisan app:token\nphp artisan app:token --revoke\n\n# Using HAWKI CLI\nphp hawki token\nphp hawki token --revoke\n"})}),"\n",(0,r.jsx)(n.p,{children:"The workflow for creating a token is:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Select identification method (Username, Email Address, or UserID)"}),"\n",(0,r.jsx)(n.li,{children:"Enter the identification value"}),"\n",(0,r.jsx)(n.li,{children:"Specify a token name (16 character maximum)"}),"\n",(0,r.jsx)(n.li,{children:"The command will output the token, which should be securely stored"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For token revocation, the command will:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"List all existing tokens for the selected user"}),"\n",(0,r.jsx)(n.li,{children:"Prompt for the ID of the token to revoke"}),"\n",(0,r.jsx)(n.li,{children:"Confirm revocation status"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"user-management",children:"User Management"}),"\n",(0,r.jsx)(n.p,{children:"Along with token management, HAWKI provides a command to remove users from the system:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using Artisan\nphp artisan app:removeuser\n\n# Using HAWKI CLI\nphp hawki remove-user\n"})}),"\n",(0,r.jsx)(n.p,{children:"This interactive command allows administrators to:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Select identification method (Username, Email Address, or UserID)"}),"\n",(0,r.jsx)(n.li,{children:"Safely remove a user from the system"}),"\n",(0,r.jsx)(n.li,{children:"Clean up associated resources"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"security-best-practices",children:"Security Best Practices"}),"\n",(0,r.jsx)(n.p,{children:"When managing tokens and users via the command line:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use secure shell connections when executing commands"}),"\n",(0,r.jsx)(n.li,{children:"Do not share the token output over insecure channels"}),"\n",(0,r.jsx)(n.li,{children:"Consider implementing token rotation policies"}),"\n",(0,r.jsx)(n.li,{children:"Keep logs of token creation and revocation for audit purposes"}),"\n",(0,r.jsx)(n.li,{children:"Perform user removals during scheduled maintenance periods"}),"\n",(0,r.jsx)(n.li,{children:"Review all tokens before removing a user to ensure services aren't disrupted"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,r.jsx)(n.p,{children:"For API support, please contact your HAWKI administrator or refer to the internal documentation for your organization's specific guidelines and policies regarding API usage."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);