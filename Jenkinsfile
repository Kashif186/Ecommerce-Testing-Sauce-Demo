pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                script {
                    git branch: 'main', url: 'https://github.com/yourusername/your-repository.git'
                }
            }
        }
        stage('Install dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Run tests') {
            steps {
                script {
                    sh 'npx cypress run'
                }
            }
        }
        post {
            always {
                junit 'cypress/Test Results/*.xml'
            }
        }
    }
}
