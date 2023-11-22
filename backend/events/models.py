from io import BytesIO

import qrcode
from django.core.files.base import ContentFile
from django.db import models
from PIL import Image


class Event(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    qr_code = models.ImageField(blank=True, upload_to="qrcodes/")
    date = models.DateField()

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        if not self.qr_code:
            qrcode_img = qrcode.make(self.name)
            canvas = Image.new(
                "RGB", (qrcode_img.pixel_size, qrcode_img.pixel_size), "white"
            )
            canvas.paste(qrcode_img)
            fname = f"qr_code-{self.name}.png"
            buffer = BytesIO()
            canvas.save(buffer, "PNG")
            self.qr_code.save(fname, ContentFile(buffer.getvalue()), save=False)
        super().save(*args, **kwargs)
