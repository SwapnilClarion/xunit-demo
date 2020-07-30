pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/SwapnilClarion/xunit-demo.git'
            }

            post {
                always {
                    junit 'reports/junit-reults/*.xml'
                    sh "sudo chown -R jenkins: ${env.WORKSPACE}"
                }
            }
        }
    }
}
