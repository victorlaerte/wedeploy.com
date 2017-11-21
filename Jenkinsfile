pipeline {
  agent {
    node {
      label 'lax'
    }
  }
  stages {
    stage('Build Docker image') {
      steps {
        sh "./.jenkins/build.sh ${env.BRANCH_NAME} ${env.BUILD_ID}"
      }
    }
  }
}
