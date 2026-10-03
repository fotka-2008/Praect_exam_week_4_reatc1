
Add-Type -AssemblyName System.Drawing

$src = Join-Path $PSScriptRoot "..\src\img"
$dst = Join-Path $PSScriptRoot "..\public\images"
New-Item -ItemType Directory -Force $dst | Out-Null
$map = [ordered]@{
  "logo.png"                  = "logo1 1.png"
  "logo-mark.png"             = "Group 3833.png"
  "car-lada-granta-taxi.png"  = "6e8cafd755d6ce79a656c4f84e43ae8cc62e9de6.png"
  "car-vw-polo-taxi.png"      = "e506fdcd96278963551ca354ff634238a0521dd3.png"
  "car-octavia-taxi.png"      = "a9a772f00cce099e146d76bb1506c5bd93cedba0.png"
  "car-octavia-taxi-new.png"  = "c37e0a7de2aafa0e72c8f431622d296903e11412.png"
  "car-octavia-black.png"     = "18ae42d60e69104056641504e2747ac9c774aedb.png"
  "car-kia-rio-red.png"       = "33f4bf07eef82fb827249620fc49be3b4ba2c96f.png"
  "car-kia-rio-red-2.png"     = "87666e71e5b01e92022004a6997be45b2752a057.png"
  "car-kia-rio-silver.png"    = "d47c7cf44b9c8f28c89929b763aa0cd8da3e5cf5.png"
  "car-hyundai-creta.png"     = "b3672130d210cdf3d1fc959c43bc640a87777c03.png"
  "car-camry-black.png"       = "b693425e64c9209af4423ca6dd5ba91639374f8f.png"
  "car-camry-white.png"       = "43edfd4249c783b055820ba2e2614331b528d004.png"
  "car-corolla-gray.png"      = "0e19049ad8e90c28eec85147e6e944682ff74da3.png"
  "car-corolla-white.png"     = "994ce914876e08f24e3c569c401dca735d40b9f8.png"
  "car-prius-silver.png"      = "0d41c49f77dde3dd81b4d6db8681096720efe8b0.png"
  "car-rav4-white.png"        = "b7a328e0f3fcc4e9491e4148ee4d03deaa69a268.png"
  "car-karoq-blue.png"        = "4e01ffb9867677e642a3505dcb6171a8775026c6.png"
  "car-superb-silver.png"     = "cf1e4cfb16ab6e7adc9450f38fc47549cd292b9c.png"
  "car-rapid-silver.png"      = "904d48ac70e03943e81c9aa843837cb3f8e5e205.png"
  "car-mazda3-red.png"        = "72f6bf4e161afd7dd9647ac12ad17ecc41724d72.png"
  "car-covered.png"           = "e799b25bc8fb345bbe5b25f65fd8a19636fcc97e.png"
  "photo-camry-showroom.jpg"  = "88ab8f647eafe2c8b35c1b45bf081e6cbe161c0b.jpg"
  "photo-camry-dark.jpg"      = "a38f52b3a1e6d8821ae90c7ad7745bd3e9691029.jpg"
  "photo-sedan-city.jpg"      = "a1d58796b0db1116c331b7734cad26f4b2227a35.jpg"
  "photo-camry-road.jpg"      = "4dc36e02340a9b126cd60ef94257cb005d1d8783.jpg"
  "photo-corolla-road.jpg"    = "f94571f98a9d6907db03cb2a045d84459599e8f2.jpg"
  "photo-land-cruiser.jpg"    = "462f27239859ed475921e88e70f604905722a1be.jpg"
  "photo-interior.jpg"        = "0383c371911577854fc018c5ac77533ace90ba9f.jpg"
  "photo-headlight.jpg"       = "296cc516d9a7d1ae52e7df72df46f1a8d59e7435.jpg"
  "photo-toyota-logo.jpg"     = "8024e77cdc5e2e8a67a9e8423b724d625de14a3f.png"

  "hero-city.jpg"             = "a87dd8f3ad506644b109e9981297a5e99c21cae2.jpg"
  "hero-installment.jpg"      = "6a51abd5fafc8fa24e27bc650a24e5ba880251f1.jpg"
  "hero-express.jpg"          = "a3eb7df59d82f07d50683e878628acf237b9acca.jpg"
  "hero-medics.jpg"           = "484aa620c292f767c1459cf6429f1986363b9f9e.jpg"
  "hero-first-car.jpg"        = "ae80fa51843c25104fe4e1e6c4078aac5d27af92.jpg"
  "hero-family.jpg"           = "8c44b80f1dab017af59664d4b25da31360367110.jpg"
  "hero-trade-in.jpg"         = "9c9df54ed1859e48fd6cbf0c00cdd9d84de81bb5.jpg"
  "hero-recycling.jpg"        = "8802dbcbab949ed6616714bc9c89530fa50af0b2.jpg"
  "hero-insurance.jpg"        = "beb67da023660fc0eb491c0e6a465b5f40808c92.jpg"
  "banner-woman-keys.png"     = "Mask Group.png"
  "people-couple.png"         = "142e85f19d0ae109234d82c7aa4ab4fdae923e59.png"
  "people-couple-small.png"   = "Mask Group (1).png"
  "people-woman-red.png"      = "a408fee9a1445d971bee27d20850184e70112350.png"
  "people-woman-glasses.png"  = "ac327defd2b4082c80c0a2d339944c7af29499f3.png"
  "people-woman-black.png"    = "d43dc7f181fa0113ae40cec481819bab313bdab8.png"
  "people-woman-navy.png"     = "debc724e936cfe2366cc3b0595ee87b548e3188a.png"
  "people-businesswoman.png"  = "46f7808d8bfdf79bb0225e4f436905115e95b9cf.png"
  "people-family.png"         = "c44d1f4e7bf4639d73020e3978a3c4b7cebb1d32.png"
  "people-team.jpg"           = "d95ee2007a2f59d2fa5265e1de54c9b5b912e4a5.png"
  "review-photo.jpg"          = "399aac18840afaf3bef970278549492b5fcec8bd.png"
  "adv-woman-keys.png"        = "Mask Group (13).png"
  "adv-family.png"            = "Mask Group (14).png"
  "adv-family-2.png"          = "Mask Group (16).png"
  "adv-wallet.png"            = "Mask Group (15).png"
  "adv-key.png"               = "Mask Group (10).png"
  "adv-thumb.png"             = "Mask Group (11).png"
  "adv-operator.png"          = "Mask Group (12).png"
  "adv-clock.png"             = "Mask Group (17).png"
  "adv-red-car.png"           = "Mask Group (18).png"
  "adv-woman-glasses.png"     = "Mask Group (19).png"
  "adv-scanner.png"           = "Mask Group (20).png"
  "adv-papers.png"            = "730c3adb73e0c46c9f63af1bb6d676021f0d8770.png"
  "boxing-glove.png"          = "b8eda73799dffe9873aa60c4064baa33a3e6f1d4.png"
  "osago-policies.png"        = "6a7cf3dcb17976f1cc055a322306a5cb1a4b6f25.png"
  "salon.jpg"                 = "a4e6d05a3353af282c9bfc65e2a488d755f20def.jpg"
  "map-russia.png"            = "Group 3394.png"
  "map-moscow.png"            = "c63f8eb546b9156b1be95e32f03ebb52b774b9a3.png"
  "blog-family.jpg"           = "a139c33ae8001b69468897acd423648976d9acba.jpg"
  "blog-couple.jpg"           = "4dddedd9ffe4cf8da3d2137bef7f909f41b65091.jpg"
  "brake-disc.png"            = "8ed5743f587138d60a963d54f762f72f604c81fc.png"
  "dim-side.png"              = "Frame.png"
  "dim-back.png"              = "Frame (1).png"
  "dim-front.png"             = "Frame (2).png"
}

$jpeg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$params = New-Object System.Drawing.Imaging.EncoderParameters 1
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 82L

foreach ($name in $map.Keys) {
  $from = Join-Path $src $map[$name]
  $to = Join-Path $dst $name
  if (-not (Test-Path -LiteralPath $from)) { Write-Warning "Нет файла: $($map[$name])"; continue }

  $img = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $from))
  if ($name.EndsWith(".jpg")) {
    $w = [Math]::Min(1920, $img.Width)
    $h = [int]($img.Height * $w / $img.Width)
    $small = New-Object System.Drawing.Bitmap $w, $h
    $g = [System.Drawing.Graphics]::FromImage($small)
    $g.InterpolationMode = "HighQualityBicubic"
    $g.DrawImage($img, 0, 0, $w, $h)
    $img.Dispose()
    $small.Save($to, $jpeg, $params)
    $g.Dispose(); $small.Dispose()
  } else {
    $img.Dispose()
    Copy-Item -LiteralPath $from -Destination $to -Force
  }
  Write-Output "OK  $name"
}
