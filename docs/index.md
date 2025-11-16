---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: "Projects"
---

{% for item in site.portfolio %}
  <article class="portfolio-item">
    <a href="{{ item.url }}">
      {% if item.thumbnail %}
        <img src="{{ item.thumbnail }}" alt="{{ item.title }}" class="thumb">
      {% endif %}
      <h2>{{ item.title }}</h2>
    </a>
  </article>
{% endfor %}
