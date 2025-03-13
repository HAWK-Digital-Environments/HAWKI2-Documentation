"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[764],{3642:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"HAWKI/Architecture/Mail Service","title":"Mail Service","description":"Overview","source":"@site/docs/HAWKI/3-Architecture/7-Mail Service.md","sourceDirName":"HAWKI/3-Architecture","slug":"/HAWKI/Architecture/Mail Service","permalink":"/HAWKI2-Documentation/de/HAWKI/Architecture/Mail Service","draft":false,"unlisted":false,"editUrl":"https://github.com/hawk/your-project/edit/main/docs/HAWKI/3-Architecture/7-Mail Service.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"HAWKI_Sidebar","previous":{"title":"Broadcasting","permalink":"/HAWKI2-Documentation/de/HAWKI/Architecture/Broadcasting"},"next":{"title":"Authentication","permalink":"/HAWKI2-Documentation/de/HAWKI/Architecture/Authentication"}}');var s=i(4848),l=i(8453);const t={sidebar_position:7},a=void 0,o={},c=[{value:"Overview",id:"overview",level:2},{value:"Core Components",id:"core-components",level:2},{value:"Email Workflow",id:"email-workflow",level:2},{value:"Secure Invitation System",id:"secure-invitation-system",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Technology Stack",id:"technology-stack",level:2},{value:"Security Considerations",id:"security-considerations",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"If users are invited to a group chat, it is possible that they will be informed by e-mail. We describe how to set this up here."}),"\n",(0,s.jsx)(n.h2,{id:"core-components",children:"Core Components"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Mail Job System"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Leverages Laravel's queue system for asynchronous email processing"}),"\n",(0,s.jsx)(n.li,{children:"All emails are dispatched through the SendEmailJob class"}),"\n",(0,s.jsx)(n.li,{children:"Emails are placed on a dedicated 'emails' queue for separate processing"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Mail Templates"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Uses Blade templating engine for email content"}),"\n",(0,s.jsxs)(n.li,{children:["Standard templates include:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"invitation.blade.php: For room invitations with secure links"}),"\n",(0,s.jsx)(n.li,{children:"welcome.blade.php: For new user onboarding"}),"\n",(0,s.jsx)(n.li,{children:"user_registered.blade.php: For registration confirmation"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Queue Workers"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dedicated queue workers process email jobs independently"}),"\n",(0,s.jsx)(n.li,{children:"Configured in run_dev.sh with separate workers for email processing:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"php artisan queue:work --queue=mails\n"})}),"\n",(0,s.jsx)(n.h2,{id:"email-workflow",children:"Email Workflow"}),"\n",(0,s.jsx)(n.p,{children:"Job Creation and Dispatch"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Initiation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Controllers create email data with specific templates and recipients"}),"\n",(0,s.jsx)(n.li,{children:"The job is dispatched to the 'emails' queue:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"SendEmailJob::dispatch($emailData, $user->email, $subjectLine, $viewTemplate)\n          ->onQueue('emails');\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Job Processing"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Queue workers pick up the job from the 'emails' queue"}),"\n",(0,s.jsx)(n.li,{children:"The SendEmailJob::handle() method generates and sends the email"}),"\n",(0,s.jsx)(n.li,{children:"All email sending occurs asynchronously, avoiding user-facing delays"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Error Handling"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Robust error logging for failed email attempts"}),"\n",(0,s.jsx)(n.li,{children:"Failed jobs are recorded in the failed_jobs table"}),"\n",(0,s.jsx)(n.li,{children:"Automatic retry logic based on Laravel's queue configuration"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"secure-invitation-system",children:"Secure Invitation System"}),"\n",(0,s.jsx)(n.p,{children:"The mail service plays a critical role in the room invitation process:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Invitation Email Creation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When inviting external users to rooms, the InvitationController generates a secure link"}),"\n",(0,s.jsx)(n.li,{children:"The link contains a signed URL with an expiration time (48 hours)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"$url = URL::signedRoute('open.invitation', [\n    'tempHash' => $validatedData['hash'],\n    'slug' => $validatedData['slug']\n], now()->addHours(48));\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Secure Link Handling"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The email contains a one-time link with encrypted credentials"}),"\n",(0,s.jsx)(n.li,{children:"Link includes the temporary hash used for room key decryption"}),"\n",(0,s.jsx)(n.li,{children:"Links are cryptographically signed to prevent tampering"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Invitation Flow"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"User receives email with invitation link"}),"\n",(0,s.jsx)(n.li,{children:"Clicking the link directs them to login/registration if needed"}),"\n",(0,s.jsx)(n.li,{children:"After authentication, the system automatically processes the invitation"}),"\n",(0,s.jsx)(n.li,{children:"The temporary hash is used to decrypt the room key"}),"\n",(0,s.jsx)(n.li,{children:"User is added to the room with appropriate permissions"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Mail Driver Options"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Configured in config/mail.php"}),"\n",(0,s.jsxs)(n.li,{children:["Supports multiple mail drivers:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SMTP (default production setup)"}),"\n",(0,s.jsx)(n.li,{children:"Log driver (default development setup)"}),"\n",(0,s.jsx)(n.li,{children:"SES, Postmark, SendMail, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Queue Configuration"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Database driver (default) for reliable mail queue processing"}),"\n",(0,s.jsx)(n.li,{children:"Failed job handling with automatic retries"}),"\n",(0,s.jsx)(n.li,{children:"Separate queue channel for mail processing"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Mail Templates"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Blade-based templates stored in resources/views/emails/"}),"\n",(0,s.jsx)(n.li,{children:"Supports HTML formatting and dynamic content"}),"\n",(0,s.jsx)(n.li,{children:"Data passed via the $emailData array"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Laravel Mail"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Built on Laravel's Illuminate\\Mail package"}),"\n",(0,s.jsx)(n.li,{children:"Uses the Mailable class system for email generation"}),"\n",(0,s.jsx)(n.li,{children:"Supports various mail drivers and flexible configuration"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Laravel Queue"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Database queue driver for persistence"}),"\n",(0,s.jsx)(n.li,{children:"Separate worker processes for email handling"}),"\n",(0,s.jsx)(n.li,{children:"Ensures emails don't block main application threads"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Blade Templating"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dynamic email templates with Blade syntax"}),"\n",(0,s.jsx)(n.li,{children:"Support for conditional content and styling"}),"\n",(0,s.jsx)(n.li,{children:"HTML-formatted emails with secure links"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Signed URLs"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All invitation links use Laravel's URL signing"}),"\n",(0,s.jsx)(n.li,{children:"Prevents tampering and ensures authenticity"}),"\n",(0,s.jsx)(n.li,{children:"Time-limited validity (48 hours by default)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Secure Information Handling"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No sensitive keys are transmitted in emails"}),"\n",(0,s.jsx)(n.li,{children:"Only encrypted references (hashes) are included"}),"\n",(0,s.jsx)(n.li,{children:"Full encryption key exchange happens after authentication"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Queue Protection"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Queue contents are encrypted in the database"}),"\n",(0,s.jsx)(n.li,{children:"Worker processes run with limited permissions"}),"\n",(0,s.jsx)(n.li,{children:"Failed job handling with secure logging"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The mail service is an integral part of HAWKI2's secure communication infrastructure, particularly for\nthe invitation system that enables encrypted room access while maintaining the end-to-end encryption\nmodel throughout the application."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var r=i(6540);const s={},l=r.createContext(s);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);