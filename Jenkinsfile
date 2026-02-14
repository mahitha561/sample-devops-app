pipeline {
    agent any

    environment {
        AWS_REGION = "us-east-2"
        ECR_REPO = "devops-sample-app"
        ACCOUNT_ID = "<your-account-id>"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/mahitha561/sample-devops-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                docker build -t 871700844971.dkr.ecr.us-east-2.amazonaws.com:1 ./app
                """
            }
        }

        stage('Login to ECR') {
            steps {
                sh """
                aws ecr get-login-password --region us-east-2 \
                | docker login --username AWS --password-stdin \
                871700844971.dkr.ecr.us-east-2.amazonaws.com
                """
            }
        }

        stage('Tag & Push Image') {
            steps {
                sh """
                docker tag 871700844971.dkr.ecr.us-east-2.amazonaws.com:1 \
                871700844971.dkr.ecr.us-east-2.amazonaws.com/871700844971.dkr.ecr.us-east-2.amazonaws.com:1

                docker push \
                 871700844971.dkr.ecr.us-east-2.amazonaws.com/871700844971.dkr.ecr.us-east-2.amazonaws.com:1
                """
            }
        }

        stage('Deploy to EKS') {
            steps {
                sh """
                kubectl set image deployment/devops-app \
                devops-container= 871700844971.dkr.ecr.us-east-2.amazonaws.com/871700844971.dkr.ecr.us-east-2.amazonaws.com:1
                """
            }
        }
    }
}