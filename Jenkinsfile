pipeline {
  agent any
  stages {
    stage('Build') {
      post {
        always {
          junit 'reports/junit-reults/*.xml'
          sh "sudo chown -R jenkins: ${env.WORKSPACE}"
        }

      }
      steps {
        git 'https://github.com/SwapnilClarion/xunit-demo.git'
        bat 'npm install'
        bat 'npm test'
      }
    }

  }
}