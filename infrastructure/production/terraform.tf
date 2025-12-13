terraform {
  backend "s3" {
    bucket  = "infrastructure.thaiwarcrimes.org"
    key     = "production.tfstate"
    encrypt = true
    region  = "ap-southeast-1"
  }

  required_version = ">= 0.12"
}

provider "aws" {
  region = var.aws_default_region
}

provider "aws" {
  region = "us-east-1"
  alias  = "us-east-1"
}
