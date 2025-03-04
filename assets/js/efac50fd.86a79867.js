"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[843],{6045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"HAWKI/getting-started/Local Installation","title":"Local Installation","description":"This chapter of the documentation focuses on setting up and running HAWKI 2.0 on your local system.","source":"@site/docs/HAWKI/2-getting-started/1-Local Installation.md","sourceDirName":"HAWKI/2-getting-started","slug":"/HAWKI/getting-started/Local Installation","permalink":"/HAWKI2-Documentation/HAWKI/getting-started/Local Installation","draft":false,"unlisted":false,"editUrl":"https://github.com/hawk/your-project/edit/main/docs/HAWKI/2-getting-started/1-Local Installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"HAWKI_Sidebar","previous":{"title":"Getting Started","permalink":"/HAWKI2-Documentation/category/getting-started"},"next":{"title":"Architecture","permalink":"/HAWKI2-Documentation/category/architecture"}}');var s=t(4848),o=t(8453);const i={sidebar_position:1},a=void 0,l={},c=[{value:"Pre Requirements",id:"pre-requirements",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Start Server",id:"start-server",level:3},{value:"Broadcasting &amp; Workers",id:"broadcasting--workers",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This chapter of the documentation focuses on setting up and running HAWKI 2.0 on your local system."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Although we strongly recommend that you first test HAWKI on your local device before deploying it on the server, If you want to skip this please read the ",(0,s.jsx)(n.a,{href:"/docs/category/deployment",children:'"Deployment"'})," chapter"]})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"pre-requirements",children:"Pre Requirements"}),"\n",(0,s.jsxs)(n.p,{children:["HAWKI 2.0 utilizes the Laravel 11 backend framework. To run HAWKI on your local machine, it is essential to ensure that all Laravel prerequisites are installed. In particular, you will need to have PHP, Composer and Node.js (including npm) installed on your system. For comprehensive setup instructions, please refer to the ",(0,s.jsx)(n.a,{href:"https://laravel.com/docs/11.x",children:"laravel documentation"}),".\nHAWKI also requires a database to store the messages and profile pictures. We recommend that you use a mySQL database. The use of administration tools such as phpMyAdmin can also speed up the process."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Clone the Git Repo:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/HAWK-Digital-Environments/HAWKI.git\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Install Dependencies"}),"\nNavigate to the project folder and run:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"composer install\nnpm install\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Find the ",(0,s.jsx)(n.code,{children:".env.example"})," file in the root directory. Rename it to ",(0,s.jsx)(n.code,{children:".env"})," by removing the .example extension."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"For comprehensive information on .env variables, refer to the dot env section of this documentation."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Authentication"})}),"\n",(0,s.jsxs)(n.p,{children:["in the .env file find AUTHENTICATION_METHOD variable.\nCurrently HAWKI supports LDAP, OpenID, and Shibboleth authentication services. A built-in Test User Athentication for internal testing purposes is also available.\nSince normally external authentication servers are not accessible from your local machine, ",(0,s.jsx)(n.strong,{children:"set the authentication method to LDAP"})," to use test users."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"/storage/app/"})," create a json file and name it ",(0,s.jsx)(n.code,{children:"test_users.json"})," and add your desired profiles in the json file as below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[\n    {\n        "username": "tester",\n        "password": "123",\n        "name": "TheTester",\n        "email": "tester@MyUni.de",\n        "employeetype": "Tester",\n        "avatar_id": ""\n    },\n    ...\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create Storage Link"})}),"\n",(0,s.jsx)(n.p,{children:"To allow clients to read files from the storage folder, we need to create a symbolic link for the storage.\nUse the following command to create the symbolic link:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan storage:link\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should be able to see the storage shortcut inside the public folder."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Please note that after changing the structure of your files in the storage folder you may need to recreate the virtual link:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo rm -rf public/storage\nphp artisan storage:link\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"API KEYS"})}),"\n",(0,s.jsxs)(n.p,{children:["Navigate to config folder. There you'll find ",(0,s.jsx)(n.code,{children:"model_providers.php.example"}),". Also rename it to ",(0,s.jsx)(n.code,{children:"model_providers.php"}),".\nOpen the file and update the configuration as you need. HAWKI currently supports LLM from OpenAI, GWDG, and Google. There is currently no integration for multimodal input and output on the part of HAWKI. Audio, video and image in/output are not displayed correctly when these models are addressed. We would be pleased if the community could contribute these features."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    // The Default Model (use the id of one of model you wish)\n    'defaultModel' => 'gpt-4o',\n\n    // The model which generates the chat names.\n    'titleGenerationModel' => 'gpt-4o-mini', \n\n    'providers' =>[\n        'openai' => [\n            'id' => 'openai',\n            'active' => true, //set to false if you want to disable the provider\n            'api_key' => ' ** YOUR SECRET API KEY ** ',\n            'api_url' => 'https://api.openai.com/v1/chat/completions',\n            'ping_url' => 'https://api.openai.com/v1/models',\n            'models' => [\n                [\n                    'id' => 'gpt-4o',\n                    'label' => 'OpenAI GPT 4o',\n                    'streamable' => true,\n                ],\n                ...  \n            ]\n        ],\n        ...\n    ]\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"start-server",children:"Start Server"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"To start the server use:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan serve\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Of course if you are using tools like Xammp or Mamp (on windows) to run apache, an nginx server, or any other methods you don't need to run this command. However, running artisan serve creates a user friendly terminal which helps the debug process."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"To start the node server use:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm run dev\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should be able to open and use HAWKI on your localhost at this stage."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"http://127.0.0.1:8000/\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important:"})," You can also use ",(0,s.jsx)(n.code,{children:"localhost:8000"})," to open the web page in your browser. However, some of the communication is resticted by the address defined in the .env file.\nIf you wish to change this, update the ",(0,s.jsx)(n.code,{children:"APP_URL"})," variable in .env."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"broadcasting--workers",children:"Broadcasting & Workers"}),"\n",(0,s.jsxs)(n.p,{children:["HAWKI uses ",(0,s.jsx)(n.a,{href:"https://reverb.laravel.com/",children:"Laravel Reverb"})," for real-time communication between client and server."]}),"\n",(0,s.jsx)(n.p,{children:'In order to establish a connection to Reverb, a set of Reverb "application" credentials must be exchanged between the client and server. These credentials are configured on the server and are used to verify the request from the client. You may define these credentials using the following environment variables:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"REVERB_APP_ID=my-app-id // replace with \nREVERB_APP_KEY=my-app-key\nREVERB_APP_SECRET=my-app-secret\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://laravel.com/docs/11.x/reverb#application-credentials",children:"READ THE ORIGINAL DOCUMENTAITON FOR MORE DETAIL"})}),"\n",(0,s.jsx)(n.p,{children:"For local testing leave the rest of the Reverb variables as is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"REVERB_HOST=127.0.0.1\nREVERB_PORT=8080\nREVERB_SCHEME=http\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start Reverb using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan reverb:start\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the terminal you should see:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Starting server on 0.0.0.0:8080 (127.0.0.1). \n"})}),"\n",(0,s.jsxs)(n.p,{children:["With php artisan reverb",":start",", clients can connect to Reverb-created group chat channels."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Workers"})}),"\n",(0,s.jsx)(n.p,{children:"Before a message is broadcasted it must be queued and dispatched by laravel workers."}),"\n",(0,s.jsx)(n.p,{children:"To start workers run the following commands in separate terminals:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan queue:work\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan queue:work --queue=message_broadcast\n"})}),"\n",(0,s.jsx)(n.p,{children:"or simply use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"bash run_dev.sh start\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);