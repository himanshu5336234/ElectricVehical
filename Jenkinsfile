pipeline {
    agent any

    environment {
        SSHUSERNAME = "ubuntu"
        SCRIPTPATH = "/home/ubuntu/Obenev_Frontend"
        IP = "3.6.82.115"
    }

    stages{
        stage('Build Deploy') {
            steps{
              sshagent (credentials: ['obenev-ec2']) {
                sh "ssh -o StrictHostKeyChecking=no ${SSHUSERNAME}@${IP} 'cd ${SCRIPTPATH} && bash -x docker.sh 2>&1'"
                
              }
            }
        }
    }
    
}
