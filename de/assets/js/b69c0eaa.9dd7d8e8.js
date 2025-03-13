"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[864],{193:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"HAWKI/Deployment/Nginx Server","title":"Nginx Server","description":"Server Preparation","source":"@site/docs/HAWKI/5-Deployment/2- Nginx Server.md","sourceDirName":"HAWKI/5-Deployment","slug":"/HAWKI/Deployment/Nginx Server","permalink":"/HAWKI2-Documentation/de/HAWKI/Deployment/Nginx Server","draft":false,"unlisted":false,"editUrl":"https://github.com/hawk/your-project/edit/main/docs/HAWKI/5-Deployment/2- Nginx Server.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"HAWKI_Sidebar","previous":{"title":"Apache Server","permalink":"/HAWKI2-Documentation/de/HAWKI/Deployment/Apache Server"}}');var s=r(4848),i=r(8453);const o={sidebar_position:2},a=void 0,l={},c=[{value:"Server Preparation",id:"server-preparation",level:2},{value:"Nginx Server Configuration",id:"nginx-server-configuration",level:2},{value:"Project Deployment Steps",id:"project-deployment-steps",level:2},{value:"DATABASE",id:"database",level:2},{value:"PROJECT CONFIGURATION",id:"project-configuration",level:2},{value:"Create Storage Link",id:"create-storage-link",level:3},{value:"Setup Server Salts",id:"setup-server-salts",level:3},{value:"Setup Authentication Methods",id:"setup-authentication-methods",level:3},{value:"Add Data Protection and Imprint",id:"add-data-protection-and-imprint",level:3},{value:"Adding API Keys",id:"adding-api-keys",level:3},{value:"Broadcasting &amp; Workers",id:"broadcasting--workers",level:3},{value:"SERVICES",id:"services",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"server-preparation",children:"Server Preparation"}),"\n",(0,s.jsx)(n.p,{children:"To prepare your server, ensure communication ports are properly configured. HAWKI deployment requires the HTTPS protocol,\nthough testing locally using HTTP is possible but not recommended."}),"\n",(0,s.jsx)(n.p,{children:"For this guide, we'll assume port usage as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"HTTP: Port 80"}),"\n",(0,s.jsx)(n.li,{children:"HTTPS: Port 443"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ensure your server meets the following requirements to run Laravel/PHP applications:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"PHP version 8.2 or higher"}),"\n",(0,s.jsxs)(n.li,{children:["Required PHP Extensions:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"PHP >= 8.2"}),"\n",(0,s.jsx)(n.li,{children:"Ctype PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"cURL PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"DOM PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"Fileinfo PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"Filter PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"Hash PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"Mbstring PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"OpenSSL PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"PCRE PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"PDO PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"Session PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"Tokenizer PHP Extension"}),"\n",(0,s.jsx)(n.li,{children:"XML PHP Extension"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ensure output buffering is enabled in your php.ini file by un-commenting:\noutput_buffering = 4096\nor setting:\noutput_buffering = On"}),"\n",(0,s.jsx)(n.p,{children:"Additionally, verify that Node and Composer are installed on your machine."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"nginx-server-configuration",children:"Nginx Server Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Nginx requires specific configuration to work properly with Laravel applications and WebSocket connections."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Install Nginx if not already installed:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"sudo apt update\nsudo apt install nginx\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a new Nginx server block configuration:\nsudo nano /etc/nginx/sites-available/hawki"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the following configuration:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'server {\n    listen 80;\n    server_name your-domain.com;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl;\n    server_name your-domain.com;\n\n    ssl_certificate /path/to/your/certificate.crt;\n    ssl_certificate_key /path/to/your/private.key;\n\n    root /var/www/html/hawki-project/public;\n    index index.php;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        include snippets/fastcgi-php.conf;\n        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n\n    # WebSocket Proxy for Laravel Reverb\n    location /app {\n        proxy_pass http://localhost:8080/app;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n\n    location /apps {\n        proxy_pass http://localhost:8080/apps;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This configuration creates a redirect from HTTP to HTTPS and sets up the necessary proxy rules for WebSocket connections."}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Create a symbolic link to enable the site:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo ln -s /etc/nginx/sites-available/hawki /etc/nginx/sites-enabled/\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Test the Nginx configuration:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo nginx -t\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Restart Nginx:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo service nginx restart\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"project-deployment-steps",children:"Project Deployment Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Copy the HAWKI project content to the Nginx web server location. This can be done via cloning the git repository or\nmanually uploading files:\ngit clone ",(0,s.jsx)(n.a,{href:"https://github.com/HAWK-Digital-Environments/HAWKI.git",children:"https://github.com/HAWK-Digital-Environments/HAWKI.git"})," /var/www/html/hawki-project"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set proper permissions for Laravel:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo chown -R www-data:www-data /var/www/html/hawki-project\nsudo chmod -R 755 /var/www/html/hawki-project/storage\nsudo chmod -R 755 /var/www/html/hawki-project/bootstrap/cache\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Install dependency packages by navigating to the project root and executing:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd /var/www/html/hawki-project\ncomposer install\nnpm install\nnpm run build\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Generate an application key:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan key:generate\n"})}),"\n",(0,s.jsx)(n.p,{children:"At this point, the project is transferred to the server, but you may encounter a Laravel error if the database connection is\nnot configured."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"database",children:"DATABASE"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"If not already installed, set up a preferred database. This documentation employs MySQL, but selection depends on your\nusage and specific requirements."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"!!! Please make sure that your database has proper security !!!"})})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Create a new, empty database, such as HAWKI_DB."}),"\n",(0,s.jsx)(n.li,{children:"Update the database connection settings in the .env file with:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DB_CONNECTION=mysql\nDB_HOST=127.0.0.1 #Database host IP\nDB_PORT=3306 #Database host port\nDB_DATABASE=HAWKI_DB #Database name\nDB_USERNAME=your_username #Database username\nDB_PASSWORD=your_password #Database password\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Run database migrations and seed data by navigating to the project directory and executing:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan migrate\nphp artisan db:seed\n"})}),"\n",(0,s.jsx)(n.p,{children:"At this stage, the database tables should be set up and operational."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"IMPORTANT:"})}),"\nIf instructions are not strictly followed, please do not forget to seed the database before allowing any other users to join\nHAWKI. This will ensure that the AI Agent (HAWKI) is registered as a user on the database.\nIf you want start a fresh database run:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"php artisan migrate:fresh --seed\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"project-configuration",children:"PROJECT CONFIGURATION"}),"\n",(0,s.jsx)(n.p,{children:"Edit the .env file within the root folder. Most variables can remain at their default values unless specific adjustments are\nrequired."}),"\n",(0,s.jsx)(n.h3,{id:"create-storage-link",children:"Create Storage Link"}),"\n",(0,s.jsxs)(n.p,{children:["To allow clients to read files from the storage folder, we need to create a symbolic link for the storage.\nUse the following command to create the symbolic link:\nphp artisan storage",":link"]}),"\n",(0,s.jsx)(n.p,{children:"You should be able to see the storage shortcut inside public folder."}),"\n",(0,s.jsx)(n.p,{children:"Please note that after changing the structure of your files in the storage folder you may need to recreate the virtual link:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo rm -rf public/storage\nphp artisan storage:link\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setup-server-salts",children:"Setup Server Salts"}),"\n",(0,s.jsx)(n.p,{children:"For encryption purposes, HAWKI utilises individual salts for each component. Though not mandatory, unique hash keys are\nrecommended:"}),"\n",(0,s.jsx)(n.h3,{id:"setup-authentication-methods",children:"Setup Authentication Methods"}),"\n",(0,s.jsx)(n.p,{children:"In the .env file find AUTHENTICATION_METHOD variable.\nCurrently HAWKI supports LDAP, OpenID, and Shibboleth authentication services. A built-in Test User Authentication for\ninternal testing purposes is also available."}),"\n",(0,s.jsx)(n.p,{children:"Set the variable to one of the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'- AUTHENTICATION_METHOD="LDAP"\n- AUTHENTICATION_METHOD="OIDC"\n- AUTHENTICATION_METHOD="Shibboleth"\n'})}),"\n",(0,s.jsx)(n.p,{children:"According to your authentication method, set the necessary variables. For more information refer to the documentation in .env\nfile."}),"\n",(0,s.jsx)(n.h3,{id:"add-data-protection-and-imprint",children:"Add Data Protection and Imprint"}),"\n",(0,s.jsx)(n.p,{children:"Data protection and imprint notes are linked in the login page. To set your organization specific legal notes:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"In the .env file find IMPRINT_LOCATION and add the URL to your organization imprint page."}),"\n",(0,s.jsx)(n.li,{children:"Locate DataProtection Files in the /resources/language folder and add the data protection notes for each language in HTML\nformat."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"adding-api-keys",children:"Adding API Keys"}),"\n",(0,s.jsx)(n.p,{children:"Navigate to config folder. There you'll find model_providers.php.example. Rename it to model_providers.php.\nOpen the file and update the configuration as you need. HAWKI currently supports OpenAI, GWDG, and Google."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// The Default Model (use the id of one of model you wish)\n'defaultModel' => 'gpt-4o',\n\n// The model which generates the chat names.\n'titleGenerationModel' => 'gpt-4o-mini',\n\n'providers' =>[\n    'openai' => [\n        'id' => 'openai',\n        'active' => true, //set to false if you want to disable the provider\n        'api_key' => ' ** YOUR SECRET API KEY ** ',\n        'api_url' => 'https://api.openai.com/v1/chat/completions',\n        'ping_url' => 'https://api.openai.com/v1/models',\n        'models' => [\n            [\n                'id' => 'gpt-4o',\n                'label' => 'OpenAI GPT 4o',\n                'streamable' => true,\n            ],\n            ...\n        ]\n    ],\n    ...\n]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"broadcasting--workers",children:"Broadcasting & Workers"}),"\n",(0,s.jsxs)(n.p,{children:["HAWKI uses ",(0,s.jsx)(n.a,{href:"https://reverb.laravel.com/",children:"https://reverb.laravel.com/"})," for real-time communication between client and server.\nIn the .env file you simply need to set reverb variables:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"REVERB_APP_ID=my-app-id\nREVERB_APP_KEY=my-app-key\nREVERB_APP_SECRET=my-app-secret\n\nREVERB configuration defaults to port 8080. Use HTTPS for secure communication:\n\nREVERB_SERVER_HOST=0.0.0.0\nREVERB_SERVER_PORT=8080\n"})}),"\n",(0,s.jsx)(n.p,{children:"However, to secure the communication between the client and the server you should use https protocol and port 443 for\nwebsocket as well.\nSet the variables to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"REVERB_HOST=yourDomain.com // set your domain without any prefixes\nREVERB_PORT=443\nREVERB_SCHEME=https //reverb scheme must be set to https instead of http.\n"})}),"\n",(0,s.jsx)(n.p,{children:"Also add the path to the SSL certificate chain and key path:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'SSL_CERTIFICATE="/path/to/certificate.crt"\nSSL_CERTIFICATE_KEY="/path/to/private.key"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ensure Port 8080 is blocked by the server firewall to prevent direct access. The WebSocket proxy configuration added to the\nNginx server block handles the secure redirection."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"services",children:"SERVICES"}),"\n",(0,s.jsx)(n.p,{children:"Before broadcasting messages to users, each message is queued on the server and processed by Laravel workers.\nIn order to automate the Reverb broadcasting and Laravel workers, we need to create system services:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new file for Reverb at ",(0,s.jsx)(n.code,{children:"/etc/systemd/system/reverb.service"}),". Insert this content:"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Don't forget to update paths: ",(0,s.jsx)(n.code,{children:"/var/www/html/hawki-project"})]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[Unit]\nDescription=Reverb WebSocket Server\nAfter=network.target\n\n[Service]\nUser=www-data\nGroup=www-data\nWorkingDirectory=/var/www/html/hawki-project\nExecStart=/usr/bin/php /var/www/html/hawki-project/artisan reverb:start\nRestart=always\nTimeoutSec=300\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Create a new file for workers at /etc/systemd/system/laravel-worker.service. Insert this content:"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Don't forget to update paths: ",(0,s.jsx)(n.code,{children:"/var/www/html/hawki-project"})]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[Unit]\nDescription=Laravel Worker Service\nAfter=network.target\n\n[Service]\nUser=www-data\nGroup=www-data\nWorkingDirectory=/var/www/html/hawki-project\nExecStart=/usr/bin/php /var/www/html/hawki-project/artisan queue:work --queue=default,mails,message_broadcast --tries=3 --timeout=90\n\nRestart=always\nRestartSec=5\nTimeoutSec=300\nLimitNOFILE=4096\n\nExecStartPost=/usr/bin/php /var/www/html/hawki-project/artisan queue:restart\n\nStandardOutput=append:/var/www/html/hawki-project/storage/logs/worker.log\nStandardError=append:/var/www/html/hawki-project/storage/logs/worker-error.log\n\n[Install]\nWantedBy=multi-user.target\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Reload Systemd Manager Configuration:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl daemon-reload\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Enable services:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl enable reverb.service\nsudo systemctl enable laravel-worker.service\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Start the Services:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl start reverb.service\nsudo systemctl start laravel-worker.service\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Check Status (to ensure they started correctly):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl status reverb.service\nsudo systemctl status laravel-worker.service\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now that workers are running, the queued messages should be successfully broadcasted to the users."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Config updates are not applied to the project."})}),"\n",(0,s.jsx)(n.p,{children:"By default Laravel caches every configuration in the project. Don't forget to clear the cached data after each adjustment.\nFor example by using:"}),"\n",(0,s.jsxs)(n.p,{children:["php artisan config",":clear","\nphp artisan cache",":clear","\nphp artisan route",":clear","\nphp artisan view",":clear"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Styles or Javascript updates are not applied"})}),"\n",(0,s.jsxs)(n.p,{children:["If the styles in browser seem incorrect or the changes are not visible on a live server, the issue may be due to the cached\nstyle or scripts in your browser.\nTry to hard reload or empty browser cache and reload.\nSome changes in javascript may be also cached in view caches. Use php artisan view",":clear"," to clear the cache."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:'3. "Failed to fetch Server Salt"'})}),"\n",(0,s.jsxs)(n.p,{children:["Clear Config and cache:\nphp artisan config",":clear","\nphp artisan cache",":clear"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"4. Vite Packages are not loaded. (md is not defined)"})}),"\n",(0,s.jsx)(n.p,{children:'Make sure node packages are built npm run build.\nIf the problem persists, locate and remove "hot" file in the public folder.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"5. Nginx 502 Bad Gateway Error"})}),"\n",(0,s.jsx)(n.p,{children:"This might occur if PHP-FPM is not running or configured correctly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl status php8.2-fpm\nsudo systemctl restart php8.2-fpm\nAlso check the Nginx error logs for more details:\nsudo tail -f /var/log/nginx/error.log\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"6. WebSocket Connection Failure"})}),"\n",(0,s.jsx)(n.p,{children:"If WebSocket connections fail, ensure the Reverb service is running and the proxy configuration is correct:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl status reverb.service\n"})}),"\n",(0,s.jsx)(n.p,{children:"Check that your firewall allows connections on port 443 but blocks direct access to port 8080."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);