data "aws_route53_zone" "this" {
  name = "thaiwarcrimes.org."
}

resource "aws_route53_record" "naked_redirect" {
  zone_id = data.aws_route53_zone.this.zone_id
  name    = ""
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.naked_redirect.domain_name
    zone_id                = aws_cloudfront_distribution.naked_redirect.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "website" {
  zone_id = data.aws_route53_zone.this.zone_id
  name    = "www"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = true
  }
}
