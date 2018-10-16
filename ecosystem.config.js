module.exports = {
  apps: [{
    name: 'icfla',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-191-8-68.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/icfla.pem',
      ref: 'origin/master',
      repo: 'https://github.com/omerasiddiqui/node.js-aws.git',
      path: '/home/ubuntu/icfla',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
