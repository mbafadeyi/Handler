from rest_framework import serializers

from ..models import Event


class EventModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ("id", "url", "name", "description", "qr_code", "date")

    # depth = 1
    # read_only_fields = ("date",)
