# login-movie-app

<h3>Things to do for deploying</h3>

<ol>
<li>Create an AWS account</li>
https://medium.com/digitalcrafts/how-to-set-up-an-ec2-instance-with-github-node-js-and-postgresql-e363cb771826<br>
<li>Launch an EC2 instance</li>
<li>SSH into your instance</li>
<li>Install Node.js</li>
<pre>
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -<br>
sudo apt-get install -y nodejs</pre>
<li>Install Git and clone repository from GitHub</li>
<li>cd <b>app</b> then <b>npm install</b></li>
<li>Install <b>Forever</b></li>
<li>Install <b>Nginx</b>, configuring Nginx</li>
https://eladnava.com/binding-nodejs-port-80-using-nginx/#nginx
<li>Start the node.js app with <b>forever</b></li>
<span>Forever을 이용 : https://eladnava.com/deploying-resilient-node-js-apps-with-forever-and-nginx/<br>
<span>PM2를 이용 : http://www.nikola-breznjak.com/blog/javascript/nodejs/using-pm2-to-run-your-node-js-apps-like-a-pro/ </span>
<pre>
forever에 -w 옵션을 사용하면 nodemon을 사용하는 것 처럼, 파일에 변화가 생겼을시 다시 서버를 켜준다.
나의 경우는 server.js나 app.js가 아닌, ./bin/www를 통해 실행했으므로 코드는
forever start -w --minUptime 1000 --spinSleepTime 1000 ./bin/www 가 된다.
</pre>
</ol>
