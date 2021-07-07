---
layout: doc
title: OverPass API
permalink: /en/osm-data/overpass-api/
lang: en
category: osm-data
---

OverPass API
==============
The Overpass API is a read-only API that provides custom selections from OpenStreetMap data.
In other words, it is a service that allows users to submit a query over the internet, and
in return receive the specific data that they requested.

Anyone who uses one of the OpenStreetMap editors is using an API behind the scenes - however this
API is designed for editing and does not provide the power of OverPass. In this chapter we'll
examine some basic functionality of the OverPass API, and see how it can be used to access data
for specific queries.

Note that this functionality is something that can also be achieved by querying a local database,
or even by filtering raw OSM data with Osmosis. But by providing an internet-based API, OverPass API
is available for a use as a database backend for different services.

A Simple Query
--------------

