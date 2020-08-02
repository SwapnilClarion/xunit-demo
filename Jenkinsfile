pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git 'https://github.com/SwapnilClarion/xunit-demo.git'
        bat 'npm install'
        bat 'npm test'
      }
    }
  }
  post {
        always {
          junit 'reports/junit-results/*.xml'
          sh "sudo chown -R jenkins: ${env.WORKSPACE}"
        }
    }
}