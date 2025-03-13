"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[404],{652:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"HAWKI/Deployment/Apache Server","title":"Apache Server","description":"This chapter provides detailed instructions for deploying HAWKI on an apache web server.","source":"@site/docs/HAWKI/5-Deployment/1- Apache Server.md","sourceDirName":"HAWKI/5-Deployment","slug":"/HAWKI/Deployment/Apache Server","permalink":"/HAWKI2-Documentation/de/HAWKI/Deployment/Apache Server","draft":false,"unlisted":false,"editUrl":"https://github.com/hawk/your-project/edit/main/docs/HAWKI/5-Deployment/1- Apache Server.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"HAWKI_Sidebar","previous":{"title":"Deployment","permalink":"/HAWKI2-Documentation/de/category/deployment"},"next":{"title":"Nginx Server","permalink":"/HAWKI2-Documentation/de/HAWKI/Deployment/Nginx Server"}}');var s=r(4848),i=r(8453);const o={sidebar_position:1},a=void 0,l={},c=[{value:"Server Preparation",id:"server-preparation",level:2},{value:"Project Deployment",id:"project-deployment",level:2},{value:"Database",id:"database",level:2},{value:"Project Configuration",id:"project-configuration",level:2},{value:"Broadcasting &amp; Workers",id:"broadcasting--workers",level:2},{value:"Services",id:"services",level:2},{value:"FAQs",id:"faqs",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This chapter provides detailed instructions for deploying HAWKI on an apache web server."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"server-preparation",children:"Server Preparation"}),"\n",(0,s.jsxs)(n.p,{children:["To prepare your server, ensure communication ports are properly configured. HAWKI deployment requires the HTTPS protocol, though testing locally or alternatives using HTTP are possible but not recommended. For local testing, refer to the ",(0,s.jsx)(n.a,{href:"/HAWKI2-Documentation/de/HAWKI/Getting%20Started",children:'"Getting Started"'})," chapter."]}),"\n",(0,s.jsx)(n.p,{children:"For this guide, we'll assume port usage as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"HTTP: Port 80"}),"\n",(0,s.jsx)(n.li,{children:"HTTPS: Port 443"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ensure your server meets the following requirements to run Laravel/PHP applications:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"PHP version 8.2 or higher"}),"\n",(0,s.jsx)(n.li,{children:"Required PHP Extensions:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"- PHP >= 8.2\n- Ctype PHP Extension\n- cURL PHP Extension\n- DOM PHP Extension\n- Fileinfo PHP Extension\n- Filter PHP Extension\n- Hash PHP Extension\n- Mbstring PHP Extension\n- OpenSSL PHP Extension\n- PCRE PHP Extension\n- PDO PHP Extension\n- Session PHP Extension\n- Tokenizer PHP Extension\n- XML PHP Extension\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ensure output buffering is enabled in your php.ini file by un-commenting:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"output_buffering = 4096\nor setting:\noutput_buffering = On\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, verify that ",(0,s.jsx)(n.strong,{children:"Node"})," and ",(0,s.jsx)(n.strong,{children:"Composer"})," are installed on your machine."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"project-deployment",children:"Project Deployment"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Copy the HAWKI project content to the desired webserver location, typically ",(0,s.jsx)(n.code,{children:"/var/www/html/hawki-project"}),". This can be done via cloning the git repository or manually uploading files."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure your server to use ",(0,s.jsx)(n.code,{children:"/var/www/html/hawki-project/public"})," as the Document Root for port 443."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DocumentRoot /var/www/html/hawki-project/public\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Optionally, redirect port 80 traffic to HTTPS:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Redirect permanent / https://yourDomain.com/\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Install dependency packages by navigating to the project root and executing:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"composer install\nnpm install\nnpm run build\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Generate an application key:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan key:generate\n"})}),"\n",(0,s.jsx)(n.p,{children:"At this point, the project is transferred to the server, but you may encounter a Laravel error if the database connection is not configured."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,s.jsx)(n.p,{children:"1- If not already installed, set up a preferred database. This documentation employs MySQL, but selection depends on your usage and specific requirements."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"!!! Please ensure that your database has adequate security !!!"})})}),"\n",(0,s.jsxs)(n.p,{children:["2- Create a new, empty database, such as ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"HAWKI_DB"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"3- Update the database connection settings in the .env file with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DB_CONNECTION= mysql\nDB_HOST= 127.0.0.1 #Database host IP\nDB_PORT= 3306 #Database host port\nDB_DATABASE= HAWKI_DB #Database name\nDB_USERNAME= root #Database username\nDB_PASSWORD= root #Database password\n"})}),"\n",(0,s.jsx)(n.p,{children:"4-Run database migrations and seed data by navigating to the project directory and executing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan migrate\nphp artisan db:seed\n"})}),"\n",(0,s.jsx)(n.p,{children:"At this stage, the database tables should be set up and operational."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"IMPORTANT:"})}),"\nIf instructions are not strictly followed, please do not forget to seed the databse before allowing any other users to join HAWKI. This will ensure that the AI Agent (HAWKI) is registered as a user on the database.\nIf you want start a fresh database run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan migrate:fresh\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"project-configuration",children:"Project Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Edit the .env file within the root folder. Most variables can remain at their default values unless specific adjustments are required."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"For comprehensive information on .env variables, refer to the dot env section of this documentation."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Setup Authentication Methods"})}),"\n",(0,s.jsx)(n.p,{children:"in the .env file find AUTHENTICATION_METHOD variable.\nCurrently HAWKI supports LDAP, OpenID, and Shibboleth authentication services. A built-in Test User Athentication for internal testing purposes is also available."}),"\n",(0,s.jsx)(n.p,{children:"Set the variable to one of the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'- AUTHENTICATION_METHOD="LDAP"\n- AUTHENTICATION_METHOD="OIDC"\n- AUTHENTICATION_METHOD="Shibboleth"\n'})}),"\n",(0,s.jsx)(n.p,{children:"According to your authentication method set the necessary variables. For more information refer to the documentation in .env file."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you are using ",(0,s.jsx)(n.strong,{children:"LDAP"})," make sure the structure of the LDAP response is setup correctly on the HAWKI side. To do that first make sure the ",(0,s.jsx)(n.code,{children:"LDAP_ATTRIBUTES"})," are set correctly and in the correct order: Username, Email Address, Employee Type, Name. By default HAWKI looks for the ",(0,s.jsx)(n.code,{children:"element zero/ variable name/ element zero"})," ",(0,s.jsx)(n.code,{children:"($info[0][$ldapAttr][0])"}),". If for any reason the response from your LDAP server has a different structure, your can change this in ",(0,s.jsx)(n.code,{children:"/app/Services/Auth/LdapService.php"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Test User"})}),"\n",(0,s.jsxs)(n.p,{children:["To login using test users, set the authentication method to LDAP.\nIn ",(0,s.jsx)(n.code,{children:"/storage/app/"})," locate ",(0,s.jsx)(n.code,{children:"test_users.json"})," file and update it with your desired profiles as below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[\n    {\n        "username": "tester",\n        "password": "123",\n        "name": "TheTester",\n        "email": "tester@MyUni.de",\n        "employeetype": "Tester",\n        "avatar_id": ""\n    },\n    ...\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create Storage Link"})}),"\n",(0,s.jsx)(n.p,{children:"To allow clients to read files from the storage folder, we need to create a symbolic link for the storage.\nUse the following command to create the symbolic link:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan storage:link\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should be able to see the storage shortcut inside public folder."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Please note that after changing the sturcture of your files in the storage folder you may need to recreate the virtual link:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo rm -rf public/storage\nphp artisan storage:link\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Setup Server Salts"})}),"\n",(0,s.jsx)(n.p,{children:"For encryption purposes, HAWKI utilises individual salts for each component. Though not mandatory, unique hash keys are recommended:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"USERDATA_ENCRYPTION_SALT"}),(0,s.jsxs)(n.td,{children:["base64",":RandomHash","=="]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INVITATION_SALT"}),(0,s.jsxs)(n.td,{children:["base64",":RandomHash","=="]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AI_CRYPTO_SALT"}),(0,s.jsxs)(n.td,{children:["base64",":RandomHash","=="]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PASSKEY_SALT"}),(0,s.jsxs)(n.td,{children:["base64",":RandomHash","=="]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BACKUP_SALT"}),(0,s.jsxs)(n.td,{children:["base64",":RandomHash","=="]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Adding API Keys"})}),"\n",(0,s.jsxs)(n.p,{children:["Navigate to config folder. There you'll find ",(0,s.jsx)(n.code,{children:"model_providers.php.example"}),". Also rename it to ",(0,s.jsx)(n.code,{children:"model_providers.php"}),".\nOpen the file and update the configuration as you need. HAWKI currently supports models from OpenAI, GWDG, and Google."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    // The Default Model (use the id of one of model you wish)\n    'defaultModel' => 'gpt-4o',\n\n    // The model which generates the chat names.\n    'titleGenerationModel' => 'gpt-4o-mini', \n\n    'providers' =>[\n        'openai' => [\n            'id' => 'openai',\n            'active' => true, //set to false if you want to disable the provider\n            'api_key' => ' ** YOUR SECRET API KEY ** ',\n            'api_url' => 'https://api.openai.com/v1/chat/completions',\n            'ping_url' => 'https://api.openai.com/v1/models',\n            'models' => [\n                [\n                    'id' => 'gpt-4o',\n                    'label' => 'OpenAI GPT 4o',\n                    'streamable' => true,\n                ],\n                ...  \n            ]\n        ],\n        ...\n    ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"broadcasting--workers",children:"Broadcasting & Workers"}),"\n",(0,s.jsxs)(n.p,{children:["HAWKI uses ",(0,s.jsx)(n.a,{href:"https://reverb.laravel.com/",children:"Laravel Reverb"})," for real-time communication between client and server.\nIn the .env file you simply need to set reverb variables:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"REVERB_APP_ID=my-app-id\nREVERB_APP_KEY=my-app-key\nREVERB_APP_SECRET=my-app-secret\n"})}),"\n",(0,s.jsx)(n.p,{children:"REVERB configuration defaults to port 8080. Use HTTPS for secure communication:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"REVERB_SERVER_HOST=0.0.0.0\nREVERB_SERVER_PORT=8080\n"})}),"\n",(0,s.jsx)(n.p,{children:"However, to secure the communication between the client and the server you should use https protocol and port 443 for websocket as well.\nSet the variables to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"REVERB_HOST=yourDomain.com // set your domain without any prefixes\nREVERB_PORT=443\nREVERB_SCHEME=https //reverb scheme must be set to https instead of http.\n"})}),"\n",(0,s.jsx)(n.p,{children:"also add the path the SSL certificate chain and key path:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'SSL_CERTIFICATE=""\nSSL_CERTIFICATE_KEY=""\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ensure Port 8080 is blocked by the server firewall. Establish a reverse proxy for communication redirection.\nfirst make sure the proxy modules are activated:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo a2enmod proxy\nsudo a2enmod proxy_http\nsudo a2enmod proxy_wstunnel\n"})}),"\n",(0,s.jsxs)(n.p,{children:["open the configuration file, normally located at: ",(0,s.jsx)(n.code,{children:"/etc/apache2/sites-available/hawki-ssl.com.conf"}),".\nAdd the following to the configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Specific WebSocket Proxy\nProxyPass /app ws://localhost:8080/app\nProxyPassReverse /app ws://localhost:8080/app\n\nProxyPass /apps ws://localhost:8080/apps\nProxyPassReverse /apps ws://localhost:8080/apps\n"})}),"\n",(0,s.jsx)(n.p,{children:"restart apache server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo service apache2 restart\n"})}),"\n",(0,s.jsx)(n.p,{children:"At this step if you run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan reverb:start\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With php artisan reverb",":start",", clients can connect to Reverb-created group chat channels.\nPreparing workers to broadcast messages follows."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"services",children:"Services"}),"\n",(0,s.jsx)(n.p,{children:"Before broadcasting messages to users, each message is queued on the server and laravel workers.\nIn order to automate the reverb broadcasting and laravel workers we need to create extra services in your linux server.\nIf reverb is already running from the previous step, stop it before continuing."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to ",(0,s.jsx)(n.code,{children:"/etc/systemd/system"}),". You will find the list of linux services."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a new file for reverb and call it reverb.service. Insert this content:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Don't forget to update paths: ",(0,s.jsx)(n.code,{children:"/var/www/html/hawki-project"})]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[Unit]\nDescription=Reverb WebSocket Server\nAfter=network.target\n\n[Service]\nUser=www-data\nGroup=www-data\nWorkingDirectory=/var/www/html/hawki-project\nExecStart=/usr/bin/php /var/www/html/hawki-project/artisan reverb:start\nRestart=always\nTimeoutSec=300\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:'Create a new file for workers and call it "laravel-worker.service". Insert this content:'}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Don't forget to update paths: ",(0,s.jsx)(n.code,{children:"/var/www/html/hawki-project"})]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[Unit]\nDescription=Laravel Worker Service\nAfter=network.target\n\n[Service]\nUser=www-data\nGroup=www-data\nWorkingDirectory=/var/www/html/hawki-project\nExecStart=/usr/bin/php /var/www/html/hawki-project/artisan queue:work --queue=default,mails,message_broadcast --tries=3 --timeout=90\n\nRestart=always\nRestartSec=5\nTimeoutSec=300\nLimitNOFILE=4096\n\nExecStartPost=/usr/bin/php /var/www/html/hawki-project/artisan queue:restart\n\nStandardOutput=append:/var/www/html/hawki-project/storage/logs/worker.log\nStandardError=append:/var/www/html/hawki-project/storage/logs/worker-error.log\n\n[Install]\nWantedBy=multi-user.target\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"4- Reload Systemd Manager Configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl daemon-reload\n"})}),"\n",(0,s.jsx)(n.p,{children:"5- Enable services:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl enable reverb.service\nsudo systemctl enable laravel-worker.service\n"})}),"\n",(0,s.jsx)(n.p,{children:"6- Start the Services:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl start reverb.service\nsudo systemctl start laravel-worker.service\n"})}),"\n",(0,s.jsx)(n.p,{children:"7-Check Status (to ensure they started correctly):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl status reverb.service\nsudo systemctl status laravel-worker.service\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now that workers are running the queued messages should be successfully broadcasted to the users."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Config updates are not applied to the project."})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["By default laravel caches every configuration in the project. Don't forget to clear the cached data after each adjustment.\n",(0,s.jsx)(n.em,{children:"for example by using:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan config:clear\nphp artisan cache:clear\nphp artisan route:clear\nphp artisan view:clear\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Styles or Javascript updates are not applied"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If the styles in browser seem incorrect or the changes are not visible on a live server, the issue may be due to the cached style or scripts in your browser.\nTry to hard reload or empty browser cache and reload.\nSome changes in javascript may be also cached in view caches. Use ",(0,s.jsx)(n.code,{children:"php artisan view:clear"})," to clear the cache."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:'3. "Failed to fetch Server Salt"'})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Clear Config and cache:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan config:clear\nphp artisan cache:clear\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"4. Vite Packages are not loaded. (md is not defined)"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Make sure node packages are built ",(0,s.jsx)(n.code,{children:"npm run build"}),'.\nIf the problem perists, locate and remove "hot" file in the public folder.']}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"5.Database is created but throws error when trying to migrate"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"double check your username and password."}),"\n",(0,s.jsx)(n.li,{children:"make sure the database name and the .env variable are identic and there are no typos."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);