pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Kashif186/Ecommerce-Testing-Sauce-Demo.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run tests') {
            environment {
                PATH = "C:\\Program Files\\nodejs"
            }
            steps {
                sh 'npx cypress run'
            }
            post {
                always {
                    junit 'cypress/cypress/results/*.xml'
                }
            }
        }
    }
}

