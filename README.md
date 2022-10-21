# How to deploy contracts : 
##### ```truffle compile```
##### ```truffle migrate```

# PM2 Info
- List all pm2 processes : ```pm2 list```
- Start new instance of service in fork mode : ```pm2 start index.js```
- Stop pm2 instance : ```pm2 stop index```
- Restart pm2 instance : ```pm2 restart index```
- Logs directory : ```/home/ubuntu/.pm2/logs```
- Check logs - ```pm2 logs```

# Working Directory on EC2 Instance
##### ```/home/ubuntu/Web3BackendService/Web3Backend```