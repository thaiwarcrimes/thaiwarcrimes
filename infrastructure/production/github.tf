resource "aws_route53_record" "github" {
  zone_id = data.aws_route53_zone.this.zone_id
  name    = "_gh-thaiwarcrimes-o"
  type    = "TXT"
  ttl     = "5"

  records = [
    "73e1bc0582"
  ]
}
