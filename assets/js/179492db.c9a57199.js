"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[739],{8198:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"HAWKI/Architecture/dot Env","title":"dot Env","description":"HAWKI 2: Configuration environment varibales","source":"@site/docs/HAWKI/3-Architecture/10-dot Env.md","sourceDirName":"HAWKI/3-Architecture","slug":"/HAWKI/Architecture/dot Env","permalink":"/HAWKI2-Documentation/HAWKI/Architecture/dot Env","draft":false,"unlisted":false,"editUrl":"https://github.com/hawk/your-project/edit/main/docs/HAWKI/3-Architecture/10-dot Env.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"HAWKI_Sidebar","previous":{"title":"Authentication","permalink":"/HAWKI2-Documentation/HAWKI/Architecture/Authentication"},"next":{"title":"Usage Record","permalink":"/HAWKI2-Documentation/HAWKI/Architecture/Usage Record"}}');var n=s(4848),r=s(8453);const d={sidebar_position:9},l="dot Env",a={},c=[{value:"HAWKI 2: Configuration environment varibales",id:"hawki-2-configuration-environment-varibales",level:2},{value:"Global Application Settings",id:"global-application-settings",level:2},{value:"Database server",id:"database-server",level:2},{value:"Filesystem Storage",id:"filesystem-storage",level:2},{value:"Session Configuration",id:"session-configuration",level:2},{value:"Event Broadcasting",id:"event-broadcasting",level:2},{value:"SSL Certificate Configuration",id:"ssl-certificate-configuration",level:2},{value:"Vite Environment Configuration",id:"vite-environment-configuration",level:2},{value:"Queue Worker Configuration",id:"queue-worker-configuration",level:2},{value:"Authentication and Authorization",id:"authentication-and-authorization",level:2},{value:"LDAP Configuration",id:"ldap-configuration",level:2},{value:"Shibboleth Configuration",id:"shibboleth-configuration",level:2},{value:"OpenID Connect (OIDC) Configuration",id:"openid-connect-oidc-configuration",level:2},{value:"External Communication Configuration",id:"external-communication-configuration",level:2},{value:"Caching",id:"caching",level:2},{value:"Email Configuration",id:"email-configuration",level:2},{value:"Encryption Configuration",id:"encryption-configuration",level:2},{value:"Links",id:"links",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"dot-env",children:"dot Env"})}),"\n",(0,n.jsx)(t.h2,{id:"hawki-2-configuration-environment-varibales",children:"HAWKI 2: Configuration environment varibales"}),"\n",(0,n.jsx)(t.p,{children:"HAWKI 2 is built with the Lavarel framework for PHP. This allows to configure the application by editing the *.php files in the config directory. However, by default these files are writtin in such a way that most settings can also be changed with environment variables. This is handy because changing the config files would mean to change the HAWKI 2 source code, since these files are managed in the HAWKI git repository and also contained in the installation packages. Environment variables, however, are set in the OS (or your hosting environment)."}),"\n",(0,n.jsx)(t.p,{children:"Additionaly, Lavarel reads the contents of a .env file in the project root directory to override the environment variables. This file is not contained in the HAWKI installation as it is meant for developers and administrators to set their local configuration values."}),"\n",(0,n.jsx)(t.p,{children:'This file is a template for the .env file. It documents all relevant settings, their allowed values and their defaults. Simply copy this file (don\'t just rename it) to a new file called .env and change the values as needed. The pre-set values will provide a sensible configuration for a "localhost deployment" for developers. Commented out settings are not strictly needed and usually contain the default values found in the config/*.php files.'}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Important:"})," the .env example file includes several unused variables which are left in the file only for future development plans or as guidelines for community developers (such as AWS, Redis, Pusher and many more attributes). These variables can be ignored or removed if you prefer so."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"global-application-settings",children:"Global Application Settings"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_NAME"}),(0,n.jsx)(t.td,{children:"HAWKI"}),(0,n.jsx)(t.td,{children:"Application name, can be anything you like HAWKI"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_ENV"}),(0,n.jsx)(t.td,{children:"local"}),(0,n.jsx)(t.td,{children:'Deployment type: "local", "statiging" or "production"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_URL"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"http://127.0.0.1:8000",children:"http://127.0.0.1:8000"})," or ",(0,n.jsx)(t.a,{href:"https://hawki.com",children:"https://hawki.com"})]}),(0,n.jsx)(t.td,{children:"Public URL to access the web interface"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_DEBUG"}),(0,n.jsx)(t.td,{children:"true"}),(0,n.jsx)(t.td,{children:'Enable debug output: "true" or "false"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_TIMEZONE"}),(0,n.jsx)(t.td,{children:"CET"}),(0,n.jsx)(t.td,{children:"Timezone of the web server"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_LOCALE"}),(0,n.jsx)(t.td,{children:"de_DE"}),(0,n.jsx)(t.td,{children:"Default language of the user interface (de_DE, en_US)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_FALLBACK_LOCALE"}),(0,n.jsx)(t.td,{children:"de_DE"}),(0,n.jsx)(t.td,{children:"Fallback language (for any missing translations)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_FAKER_LOCALE"}),(0,n.jsx)(t.td,{children:"de_DE"}),(0,n.jsx)(t.td,{children:"You shouldn't need this"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_KEY"}),(0,n.jsx)(t.td,{children:"base64:12345678="}),(0,n.jsxs)(t.td,{children:["Encryption key: 32 random characters (e.g. created with ",(0,n.jsx)(t.a,{href:"https://www.random.org/strings",children:"https://www.random.org/strings"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_PREVIOUS_KEYS"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Comma seperated list of previously used encryption keys"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_MAINTENANCE_DRIVER"}),(0,n.jsx)(t.td,{children:"file"}),(0,n.jsx)(t.td,{children:'Maintenance mode driver: "cache" or "file": "cache" allows setting the maintenance mode across multiple machines'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APP_MAINTENANCE_STORE"}),(0,n.jsx)(t.td,{children:"database"}),(0,n.jsx)(t.td,{children:'Maintenance mode storage: "database" or ???'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"database-server",children:"Database server"}),"\n",(0,n.jsx)(t.p,{children:"HAWKI uses a database to save chats and other data. For this a relation SQL database like MariaDB (MySQL) or Postgres should be used in production. For local development SQlite provides a zero-config default solution (but note that SQlite is single-user only and stores all data in a single file)."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"IMPORTANT:"})}),' When using a database other than SQlite set DB_DATABASE to a sensible value. Because the default value in config/database.php is "lavarel" which is less clear and could at least in theory already be in use by other applications.']}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_CONNECTION"}),(0,n.jsx)(t.td,{children:"mysql"}),(0,n.jsx)(t.td,{children:'Database server type: "mysql", "sqlite", "mariadb", "pgsql", "sqlsrv" (see config/database.php)'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_URL"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Database connection URL (instead of host and port)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_HOST"}),(0,n.jsx)(t.td,{children:"127.0.0.1"}),(0,n.jsx)(t.td,{children:"Database server host name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_PORT"}),(0,n.jsx)(t.td,{children:"3306"}),(0,n.jsx)(t.td,{children:"Database server port number"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_SOCKET"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Unix domain socket instead of URL, host and port (MySQL and MariaDB only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_DATABASE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Database name (please change!)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_USERNAME"}),(0,n.jsx)(t.td,{children:"root"}),(0,n.jsx)(t.td,{children:"Username to access the database server"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_PASSWORD"}),(0,n.jsx)(t.td,{children:"root"}),(0,n.jsx)(t.td,{children:"Password to access the database server"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_CHARSET"}),(0,n.jsx)(t.td,{children:"utf8mb4"}),(0,n.jsx)(t.td,{children:"Character encoding of the database"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_COLLATION"}),(0,n.jsx)(t.td,{children:"utf8mb4_unicode_ci"}),(0,n.jsx)(t.td,{children:"Database collation (MySQL and MariaDB only)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"filesystem-storage",children:"Filesystem Storage"}),"\n",(0,n.jsx)(t.p,{children:"Uploaded media files are typically stored on disk and served from an asset web server. However, to simplify the setup the uploaded files will be served by PHP by default, though thos is not so good for performance. Alternateively Amazon S3 could be used."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:'NOTE: If you want to serve media files with your web server, choose "public" for FILESYSTEM_DISK. In this case make the server serve the files from the "app/public" directory. The HTTP address must be your APP_URL followed by "/storage".'}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"FILESYSTEM_DISK"}),(0,n.jsx)(t.td,{children:"local"}),(0,n.jsx)(t.td,{children:'Storage type: "local", "public", "s3" (see config/filesystem.php)'})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"session-configuration",children:"Session Configuration"}),"\n",(0,n.jsx)(t.p,{children:"These are essential Laravel default variables for session management and they must be present and active to ensure proper session handling within the application."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SESSION_DRIVER"}),(0,n.jsx)(t.td,{children:"database"}),(0,n.jsx)(t.td,{children:'Specifies the session "driver" or handler used to store session data. Common choices include "file", "cookie", "database", etc. Typically, "database" is used if sessions are stored in the database.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SESSION_LIFETIME"}),(0,n.jsx)(t.td,{children:"120"}),(0,n.jsx)(t.td,{children:"The session lifetime in minutes. It determines how long a session remains active before it expires."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SESSION_ENCRYPT"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:'Indicates whether session data should be encrypted. Accepts "true" or "false". When set to "true", it adds an extra layer of security by encrypting session data.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SESSION_PATH"}),(0,n.jsx)(t.td,{children:"/"}),(0,n.jsx)(t.td,{children:'Defines the path for which the session cookie is available. The default value is "/".'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SESSION_DOMAIN"}),(0,n.jsx)(t.td,{children:"null"}),(0,n.jsx)(t.td,{children:'Specifies the domain that the session cookie is available to. Use "null" to default to the current domain.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SESSION_EXPIRE_ON_CLOSE"}),(0,n.jsx)(t.td,{children:"true"}),(0,n.jsx)(t.td,{children:'Defines whether the session should expire when the browser is closed. Set to "true" to expire sessions on browser close, enhancing session security.'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"event-broadcasting",children:"Event Broadcasting"}),"\n",(0,n.jsx)(t.p,{children:"Lavarel contains an internal mechanism to broadcast events amongst servers. Normaly you shouldn't need to change the settings here. Just use the values below and only change them if you really know what you are doing."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"BROADCAST_CONNECTION"}),(0,n.jsx)(t.td,{children:'Broadcasting mechanism: "reverb"'})]})})]}),"\n",(0,n.jsx)(t.p,{children:"For websocket connectivity Lavarel provides a special server called Reverb. This must be set up for HAWKI since many features rely on real-time communication via web sockets."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_HOST"}),(0,n.jsx)(t.td,{children:"127.0.0.1 / hawki.com"}),(0,n.jsx)(t.td,{children:"Hostname of the Reverb server (set to your top-level domain for production)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_PORT"}),(0,n.jsx)(t.td,{children:"8080 / 443"}),(0,n.jsx)(t.td,{children:"Port number of the Reverb server (set to 443 for production)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_SERVER_HOST"}),(0,n.jsx)(t.td,{children:"0.0.0.0"}),(0,n.jsx)(t.td,{children:"Hostname of the Reverb server (set to 0.0.0.0 for production)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_SERVER_PORT"}),(0,n.jsx)(t.td,{children:"8080"}),(0,n.jsx)(t.td,{children:"Port number of the Reverb server (set to 8080 for production)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_SCHEME"}),(0,n.jsx)(t.td,{children:"http/https"}),(0,n.jsx)(t.td,{children:'Connection protocol for the Reverb server: "http" or "https"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_APP_ID"}),(0,n.jsx)(t.td,{children:"hawki"}),(0,n.jsx)(t.td,{children:"Reverb application Id, can be anything you like?"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_APP_SECRET"}),(0,n.jsx)(t.td,{children:"123456789"}),(0,n.jsx)(t.td,{children:"Password to access the Reverb server???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_APP_KEY"}),(0,n.jsx)(t.td,{children:"123456789"}),(0,n.jsx)(t.td,{children:"Secret key to access the Reverb server ???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_APP_PING_INTERVAL"}),(0,n.jsx)(t.td,{children:"60"}),(0,n.jsx)(t.td,{children:"Ping interval in seconds ???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_APP_MAX_MESSAGE_SIZE"}),(0,n.jsx)(t.td,{children:"10000"}),(0,n.jsx)(t.td,{children:"Maximum message size in bytes ???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_SCALING_ENABLED"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:'"true" or "false"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REVERB_SCALING_CHANNEL"}),(0,n.jsx)(t.td,{children:"reverb"}),(0,n.jsx)(t.td,{children:'"reverb"'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"ssl-certificate-configuration",children:"SSL Certificate Configuration"}),"\n",(0,n.jsx)(t.p,{children:"These environment variables are used to specify the SSL certificate and the corresponding private key that are essential for establishing secure TLS/SSL connections in certain  broadcasting setups. This is particularly crucial when using Reverb or similar services  with encrypted connections, ensuring data is securely transmitted over HTTPS."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SSL_CERTIFICATE"}),(0,n.jsx)(t.td,{children:"Specifies the path to your SSL certificate file. This certificate is used to authenticate and establish a secure connection between the server and the client."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SSL_CERTIFICATE_KEY"}),(0,n.jsx)(t.td,{children:"Specifies the path to the private key file corresponding to your SSL certificate. The key is required to confirm the identity of the server and encrypt the data being transmitted."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"In the broadcasting configuration, these variables are used to configure the Guzzle HTTP client with appropriate SSL settings. By providing these files, you enable SSL/TLS encryption for broadcast services, enhancing the security of data in transit."}),"\n",(0,n.jsx)(t.h2,{id:"vite-environment-configuration",children:"Vite Environment Configuration"}),"\n",(0,n.jsx)(t.p,{children:"These Vite environment variables are used to configure the front-end build system and its integration with services such as Reverb for real-time functionality within the application."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VITE_APP_NAME"}),(0,n.jsx)(t.td,{children:"Represents the application's name used within the Vite build process. It is typically a direct reflection of the application's name set in the Laravel backend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VITE_REVERB_APP_KEY"}),(0,n.jsx)(t.td,{children:"The Reverb application's key used for authentication. It should mirror the REVERB_APP_KEY variable set in the backend environment configuration."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VITE_REVERB_APP_CLUSTER"}),(0,n.jsx)(t.td,{children:"The cluster designation for the Reverb setup, which specifies which region or data center the real-time data will be managed through."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VITE_REVERB_HOST"}),(0,n.jsx)(t.td,{children:"Designates the host for the Reverb service. This is typically set from the corresponding backend environment variable REVERB_HOST."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VITE_REVERB_PORT"}),(0,n.jsx)(t.td,{children:"Specifies the port that the Reverb service will run on, consistent with the setup from the backend environment variable REVERB_PORT."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VITE_REVERB_SCHEME"}),(0,n.jsx)(t.td,{children:'Defines the protocol scheme used by the Reverb service, such as "http" or "https", typically mirroring the REVERB_SCHEME variable from the backend.'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"queue-worker-configuration",children:"Queue Worker Configuration"}),"\n",(0,n.jsx)(t.p,{children:"This configuration setting is used to specify the queue connection that should be used by the Laravel application. This is essential for managing asynchronous tasks such as sending emails, processing uploads, or any other task that can be handled in the background."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"QUEUE_CONNECTION"}),(0,n.jsx)(t.td,{children:'Defines the queue connection that the Laravel application will use. Options include "sync", "database", "redis", etc. The "database" connection is typically used to store jobs in a database table, which is useful for tracking, retrying, or monitoring queued jobs effectively.'})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"authentication-and-authorization",children:"Authentication and Authorization"}),"\n",(0,n.jsx)(t.p,{children:"Access to HAWKI is restricted for registered users. In a production environment, you usually want to connect to your LDAP directory, OpenID provider, or Shibboleth service to make HAWKI available to your staff and/or students. For simpler setups (e.g., a small project setup for a single course), you can use the built-in Test User Authentication mechanism. This allows defining a small set of pre-allocated users in the local database (set up in advance by you)."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"NOTE:"})})," If you want a small setup with fixed users but want to allow the users to change their passwords, you can install LLDAP (",(0,n.jsx)(t.a,{href:"https://github.com/lldap/lldap",children:"https://github.com/lldap/lldap"}),") on the same machine than HAWKI."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Supported authentication methods:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"LDAP"}),"\n",(0,n.jsx)(t.li,{children:"OIDC (OpenID Connect)"}),"\n",(0,n.jsx)(t.li,{children:"Shibboleth"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Set the AUTHENTICATION_METHOD variable to one of the following:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'    AUTHENTICATION_METHOD="LDAP"\n    AUTHENTICATION_METHOD="OIDC"\n    AUTHENTICATION_METHOD="Shibboleth"\n'})}),"\n",(0,n.jsx)(t.p,{children:"According to your authentication method, set the necessary variables as follows:"}),"\n",(0,n.jsx)(t.h2,{id:"ldap-configuration",children:"LDAP Configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_CONNECTION"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'Configure the LDAP connection. Currently only "default" is supported (see config/ldap.php)'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_HOST"}),(0,n.jsx)(t.td,{children:'"ldaps://...de"'}),(0,n.jsx)(t.td,{children:"Hostname of the LDAP server"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_PORT"}),(0,n.jsx)(t.td,{children:'"636"'}),(0,n.jsx)(t.td,{children:"Port number of the LDAP server"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_USERNAME"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Distinguished Name (DN) used for bind operation"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_BIND_PW"}),(0,n.jsx)(t.td,{children:'"xxx"'}),(0,n.jsx)(t.td,{children:"Password to access the LDAP server"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_BASE_DN"}),(0,n.jsx)(t.td,{children:'"xxx"'}),(0,n.jsx)(t.td,{children:"Base DN for the LDAP search"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_TIMEOUT"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Timeout for LDAP queries in seconds"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_SSL"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'Use SSL to connect to the LDAP server. Not recommended: "true" or "false"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_TLS"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'Use TLS to connect to the LDAP server. Recommended: "true" or "false"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_SASL"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'Use SASL to connect to the LDAP server: "true" or "false"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_LOGGING"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'Enable logging of LDAP queries: "true" or "false"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_CACHE"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'Enable caching of LDAP queries: "true" or "false"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_ATTRIBUTES"}),(0,n.jsx)(t.td,{children:"cn,mail,employeetype,displayname"}),(0,n.jsx)(t.td,{children:"Attributes required for data extraction (Username, Email Address, Employee Type, Name)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LDAP_FILTER"}),(0,n.jsx)(t.td,{children:'"(|(sAMAccountName=username)(mail=username))"'}),(0,n.jsx)(t.td,{children:"Filter required for authentication based on Username"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CACHE_DRIVER"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'Cache driver for caching LDAP queries: "file", ...'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TEST_USER_LOGIN"}),(0,n.jsx)(t.td,{children:"true / false"}),(0,n.jsx)(t.td,{children:"Reads the test users list in storage folder before LDAP. Set to true for allowing test access and add tester profile to the json file."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"shibboleth-configuration",children:"Shibboleth Configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SHIBBOLETH_LOGIN_URL"}),(0,n.jsx)(t.td,{children:'"Shibboleth.sso/Login?target=login.php"'}),(0,n.jsxs)(t.td,{children:["Path to the Shibboleth login handler ",(0,n.jsx)(t.code,{children:"\"{$scheme}://{$_SERVER['HTTP_HOST']}/{$loginPath}{$loginPage}\""})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SHIBBOLETH_LOGOUT_URL"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"URL for Shibboleth logout"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ShIBBOLETH_NAME_VAR"}),(0,n.jsx)(t.td,{children:'"displayname"'}),(0,n.jsx)(t.td,{children:"Defined attribute on shibboleth server for name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ShIBBOLETH_EMPLOYEETYPE_VAR"}),(0,n.jsx)(t.td,{children:'"email"'}),(0,n.jsx)(t.td,{children:"Defined attribute on shibboleth server for employee type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ShIBBOLETH_EMAIL_VAR"}),(0,n.jsx)(t.td,{children:'"employeetype"'}),(0,n.jsx)(t.td,{children:"Defined attribute on shibboleth server for email address"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"openid-connect-oidc-configuration",children:"OpenID Connect (OIDC) Configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OIDC_IDP"}),(0,n.jsxs)(t.td,{children:['"',(0,n.jsx)(t.a,{href:"https://xxx",children:"https://xxx"}),'"']}),(0,n.jsx)(t.td,{children:"URL of the OpenID Connect Identity Provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OIDC_CLIENT_ID"}),(0,n.jsx)(t.td,{children:'"xxx"'}),(0,n.jsx)(t.td,{children:"Client ID for the OIDC application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OIDC_CLIENT_SECRET"}),(0,n.jsx)(t.td,{children:'"xxx"'}),(0,n.jsx)(t.td,{children:"Client secret for the OIDC application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OIDC_LOGOUT_URI"}),(0,n.jsx)(t.td,{children:'"xxx"'}),(0,n.jsx)(t.td,{children:"URI for OIDC logout"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OIDC_SCOPES"}),(0,n.jsx)(t.td,{children:"profile,email"}),(0,n.jsx)(t.td,{children:"Scopes define the level of access that the client is requesting from the authorization server."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OIDC_FIRSTNAME_VAR"}),(0,n.jsx)(t.td,{children:'"firstname"'}),(0,n.jsx)(t.td,{children:'"firstname"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OIDC_LASTNAME_VAR"}),(0,n.jsx)(t.td,{children:'"lastname"'}),(0,n.jsx)(t.td,{children:'"lastname"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OIDC_EMAIL_VAR"}),(0,n.jsx)(t.td,{children:'"email"'}),(0,n.jsx)(t.td,{children:'"email"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OIDC_EMPLOYEETYPE_VAR"}),(0,n.jsx)(t.td,{children:'"employeetype"'}),(0,n.jsx)(t.td,{children:'"employeetype"'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"external-communication-configuration",children:"External Communication Configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ALLOW_EXTERNAL_COMMUNICATION"}),(0,n.jsx)(t.td,{children:'This setting enables or disables the ability for users to generate and use API keys to access HAWKI models. When set to "true", users will be able to create API keys, allowing external applications to register and interact with HAWKI using the user\'s account. This is particularly useful for integrating HAWKI with third-party applications or for enabling programmatic access to HAWKI functionalities. Ensure that this feature is enabled only if you understand the security implications and have measures in place to protect API access and user data.'})]})})]}),"\n",(0,n.jsx)(t.p,{children:'Example: ALLOW_EXTERNAL_COMMUNICATION="true" or ALLOW_EXTERNAL_COMMUNICATION="false"'}),"\n",(0,n.jsx)(t.p,{children:"ALLOW_EXTERNAL_COMMUNICATION=false"}),"\n",(0,n.jsx)(t.h2,{id:"caching",children:"Caching"}),"\n",(0,n.jsx)(t.p,{children:"The following settings allow use a dedicated cache server to speed up some often executed code paths like database queries and so on. Usually a very fast storage like Memcached or Redis is used for this. By default the local database will be used, which should be fine for most installations. So only change these values if you really need to."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CACHE_STORE"}),(0,n.jsx)(t.td,{children:'"array", "database", "file", "memcached", "redis", "dynamodb", "octane" (see config/cache.php)'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CACHE_PREFIX"}),(0,n.jsx)(t.td,{children:"Prefix for cache keys (by default calculated from the app name)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_CACHE_TABLE"}),(0,n.jsx)(t.td,{children:"???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_CACHE_CONNECTION"}),(0,n.jsx)(t.td,{children:"???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DB_CACHE_LOCK_CONNECTION"}),(0,n.jsx)(t.td,{children:"???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MEMCACHED_HOST"}),(0,n.jsx)(t.td,{children:"???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MEMCACHED_PORT"}),(0,n.jsx)(t.td,{children:"???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MEMCACHED_USERNAME"}),(0,n.jsx)(t.td,{children:"???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MEMCACHED_PASSWORD"}),(0,n.jsx)(t.td,{children:"???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MEMCACHED_PERSISTENT_ID"}),(0,n.jsx)(t.td,{children:"???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REDIS_CACHE_CONNECTION"}),(0,n.jsx)(t.td,{children:"cache"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REDIS_CACHE_LOCK_CONNECTION"}),(0,n.jsx)(t.td,{children:"default"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DYNAMODB_CACHE_TABLE"}),(0,n.jsx)(t.td,{children:"???"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DYNAMODB_ENDPOINT"}),(0,n.jsx)(t.td,{children:"???"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"email-configuration",children:"Email Configuration"}),"\n",(0,n.jsx)(t.p,{children:"The email configuration settings allow the application to send invitation emails to users, enabling them to invite other users to group chats. This feature is currently in beta testing. Ensure that the mail server settings are correctly configured to enable email functionality."}),"\n",(0,n.jsxs)(t.p,{children:["|MAIL_MAILER| smtp          |The mailer method to use for sending emails. Typically set to \"smtp\".|\n|MAIL_HOST| smtp.email.com  |The hostname of the SMTP server used to send emails.|\n|MAIL_PORT| 587             |The port number used by the SMTP server. Use 465 for SSL or 587 for TLS.|\n|MAIL_USERNAME|             |The username for authenticating with the SMTP server.|\n|MAIL_PASSWORD|             |The password for authenticating with the SMTP server.|\n|MAIL_ENCRYPTION| tls       |The encryption method used to secure email transmissions. Use 'ssl' for port 465.|\n|MAIL_FROM_ADDRESS| ",(0,n.jsx)(t.a,{href:"mailto:our_gmail_address@email.com",children:"our_gmail_address@email.com"}),'        |The email address that will appear as the sender of the invitation emails.|\n|MAIL_FROM_NAME| "HAWKI"    |The display name that will appear as the sender of the invitation emails.|']}),"\n",(0,n.jsx)(t.h2,{id:"encryption-configuration",children:"Encryption Configuration"}),"\n",(0,n.jsx)(t.p,{children:"For enhanced security, HAWKI utilizes individual salts for each component to ensure that data is encrypted uniquely. While not mandatory, using unique hash keys for each component is recommended to maximize the security of user data, invitations, AI components, passkeys, and backups."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"USERDATA_ENCRYPTION_SALT"}),(0,n.jsx)(t.td,{children:"The salt used specifically for encrypting user data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"INVITATION_SALT"}),(0,n.jsx)(t.td,{children:"The salt used for encrypting invitations data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AI_CRYPTO_SALT"}),(0,n.jsx)(t.td,{children:"Used to generate a derived key for the AI messages in the groupchat"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PASSKEY_SALT"}),(0,n.jsx)(t.td,{children:"The salt used for encrypting passkey data, contributing to robust password and credential security."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"BACKUP_SALT"}),(0,n.jsx)(t.td,{children:"The salt used to encrypt backup data, ensuring their security during storage and transfer."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IMPRINT_LOCATION"}),(0,n.jsx)(t.td,{children:"The URL to your organization imprint page."})]})})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>l});var i=s(6540);const n={},r=i.createContext(n);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);