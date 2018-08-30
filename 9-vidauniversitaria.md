---
layout: default
title: Vida Universitaria
permalink: /vida-universitaria/


---
{::options parse_block_html="true" /}



# Vida Universitaria



{% for tema in site.vida_universitaria %}

{% assign auxiliar = tema | split: "," %}
{% assign maximo = auxiliar[1] %}
{% assign imagen = auxiliar[0] | downcase %}
{% assign titulo = auxiliar[0]  %}

{%if titulo == "torneo-programacion" %}
{% assign titulo = "Torneo de Programación Competitiva 2018-1"  %}
{% endif %}

{% assign extension = ".JPG"  %}
{% if titulo == "DCCerro" %}
{% assign extension = ".jpeg"  %}
{% endif %}

<div>

## {{titulo}}

<!-- Container for the image gallery -->
<div class="container">

{% for i in (1..maximo) %}
                
<div class="mySlides {{imagen}}">
<div class="numbertext {{imagen}}">{{ i }} / {{maximo}}
</div>



<img class="img {{imagen}}" src="{{ "/assets/" | append: imagen | append: "-" | append: i | append: extension}}" >
</div>


{% endfor %}

<!-- Next and previous buttons -->
<a class="prev" onclick="plusSlides(-1, '{{imagen}}')">&#10094;</a>
<a class="next" onclick="plusSlides(1, '{{imagen}}' )">&#10095;</a>

</div>
</div>

{% endfor %}
