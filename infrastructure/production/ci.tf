resource "aws_iam_user" "ci" {
  name = "ci"
}

resource "aws_iam_access_key" "ci" {
  user = aws_iam_user.ci.name
}

resource "aws_iam_role" "ci" {
  name = "ci"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          AWS = [
            aws_iam_user.ci.arn
          ]
        }
      }
    ]
  })
}

resource "aws_iam_policy" "ci" {
  name = "ci"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "cloudfront:CreateInvalidation"
        ]
        Effect   = "Allow"
        Resource = aws_cloudfront_distribution.website.arn
      },
      {
        Action = [
          "s3:ListBucket",
        ]
        Effect   = "Allow"
        Resource = aws_s3_bucket.website.arn
      },
      {
        Action = [
          "s3:PutObject",
          "s3:PutObjectAcl",
          "s3:GetObject",
          "s3:GetObjectAcl",
          "s3:DeleteObject"
        ]
        Effect   = "Allow"
        Resource = "${aws_s3_bucket.website.arn}/*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ci" {
  role       = aws_iam_role.ci.name
  policy_arn = aws_iam_policy.ci.arn
}
