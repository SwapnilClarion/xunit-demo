pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git 'https://github.com/SwapnilClarion/xunit-demo.git'
        bat 'git pull'
        bat 'npm install'
        bat 'npm test'
        bat 'npm run junit-report'
      }
    }

  }
  post {
    always {
      junit 'reports/junit-results/*.xml'
    }

  }
}