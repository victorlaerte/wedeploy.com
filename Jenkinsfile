@Library('ReleaseManagementSharedLib') _

pipeline {
  agent {
    node {
      label 'console'
    }
  }
  stages {
    stage('Remove images and containers') {
      steps {
        buildStep('Remove images and containers') {
          sh "./.jenkins/setup.sh --shutdown"
        }
      }
    }
    stage('Build Docker image') {
      steps {
        buildStep('Build Docker image') {
          sh "./.jenkins/build.sh ${env.BRANCH_NAME} ${env.BUILD_ID}"
        }
      }
    }
    stage('Setup containers') {
      steps {
        buildStep('Setup containers') {
          sh "./.jenkins/setup.sh --run ${env.BRANCH_NAME} ${env.BUILD_ID}"
        }
      }
    }
    stage('Functional Tests') {
      steps {
        buildStep('Functional Tests') {
          sh "./.jenkins/test.sh"
        }
      }
    }
  }
  post {
    always {
      junit(allowEmptyResults: true, testResults: 'wedeploy-functional-tests/test-results/TEST-*.xml')
      archiveArtifacts artifacts: 'wedeploy-functional-tests/html-report/*.html'

      sh "./.jenkins/setup.sh --shutdown"
    }
  }
}