from django.contrib import admin

# Register your models here.
from .models import (Caracteristica, Categoria, Cliente, Color, Estilo, Marca, MarcaImagen, Magnitud, MarcaCategoriaImagen, Material, Modelo, Persona, Producto, ProductoImagen)

from django.utils.html import format_html#Para crear formatos html que se puedan exportar
@admin.register(Magnitud)
class MagnitudAdmin(admin.ModelAdmin):
    list_display=['unidad', 'simbolo']
    list_filter=['unidad', 'simbolo']
    search_fields=['unidad', 'simbolo']
    list_per_page=10

@admin.register(Caracteristica)
class CaracteristicaAdmin(admin.ModelAdmin):
    list_display=['atributo', 'magnitud', 'atributo', 'magnitud', 'atributo2', 'magnitud2', 'atributo3', 'magnitud3', 'atributo4', 'magnitud4', 'atributo5', 'magnitud5', 'atributo6', 'magnitud6', 'atributo7', 'magnitud7', 'atributo8', 'magnitud8', 'atributo9', 'magnitud9', 'atributo10', 'magnitud10']
    list_filter=['atributo', 'magnitud', 'atributo', 'magnitud', 'atributo2', 'magnitud2', 'atributo3', 'magnitud3', 'atributo4', 'magnitud4', 'atributo5', 'magnitud5', 'atributo6', 'magnitud6', 'atributo7', 'magnitud7', 'atributo8', 'magnitud8', 'atributo9', 'magnitud9', 'atributo10', 'magnitud10']
    search_fields=['atributo', 'magnitud', 'atributo', 'magnitud', 'atributo2', 'magnitud2', 'atributo3', 'magnitud3', 'atributo4', 'magnitud4', 'atributo5', 'magnitud5', 'atributo6', 'magnitud6', 'atributo7', 'magnitud7', 'atributo8', 'magnitud8', 'atributo9', 'magnitud9', 'atributo10', 'magnitud10']
    list_per_page=10

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    @admin.display(description='nivel')#short_description => Es una especie de alias para poder importarlo. Equivalente a 'verbose_name' en el models
    def nivel_nombre(self, obj):
        return str(f'Nivel: {obj.nivel}')
    
    @admin.display(description='nivel_padre')
    def nivelpadre_nombre(self, obj):
        return str(f'NivelPadre: {obj.nivel_padre}')

    # @admin.display(description='imagen_foto')
    # def imagen_html(self, obj):
    #     if obj.imagen: return format_html('<img alt="{}" src="{}" title="{}" width="100px"/>'.format(obj.imagen.url, obj.imagen.url, obj.imagen))#obj.imagen=>Nombre de la imagen, obj.imagen.url=>URL de la imagen
    
    # @admin.display(description='imagen_url')
    # def imagen_url(self, obj):
    #     if obj.imagen: return obj.imagen.url

    @admin.display(description='imagen_foto')
    def imagen_foto(self, obj):
        if obj.imagen!='': return format_html('<img alt="{}" src="{}" title="{}" width="100px"/>'.format(obj.imagen.url, obj.imagen.url, obj.imagen))
        else: return '-'
    
    @admin.display(description='imagen_nombre')
    def imagen_nombre(self, obj):
        if obj.imagen!='': return obj.imagen
        else: return '-'

    @admin.display(description='imagen_url')
    def imagen_url(self, obj):
        if obj.imagen!='': return str(obj.imagen.url)
        else: return '-'
        
    list_display=('nombre', 'ceo', 'nivel_nombre', 'nivelpadre_nombre', 'imagen_foto', 'imagen_nombre', 'imagen_url')
    list_filter=('nivel', 'nombre', 'ceo')
    # list_filter=('producto__nombre', 'imagen')
    search_fields=['nombre', 'ceo', 'imagen_nombre', 'imagen_url']#producto__nombre => Acceder a objeto 'Producto' desde FK y obtener su 'nombre'
    # search_fields=['producto__nombre', 'imagen']#producto__nombre => Acceder a objeto 'Producto' desde FK y obtener su 'nombre'
    list_per_page=10

@admin.register(Marca)
class MarcaAdmin(admin.ModelAdmin):
    list_display=['nombre', 'ceo']
    list_filter=['nombre']
    search_fields=['nombre', 'ceo']
    list_per_page=10

@admin.register(MarcaImagen)
class MarcaImagenAdmin(admin.ModelAdmin):
    @admin.display(description='imagen_url')
    def imagen_url(self, obj):
        if obj.imagen!='': return str(obj.imagen.url)
        else: return '-'
        
    @admin.display(description='imagen_foto')
    def imagen_foto(self, obj):
        return format_html('<img alt="{}" src="{}" title="{}" width="100px"/>'.format(obj.imagen.url, obj.imagen.url, obj.imagen))#obj.imagen=>Nombre de la imagen, obj.imagen.url=>URL de la imagen
    
    @admin.display(description='orden', ordering='orden')
    def orden_nuevo(self, obj):
        return obj.orden
        
    list_display=('marca', 'orden_nuevo', 'imagen', 'imagen_url', 'imagen_foto')
    list_filter=('marca__nombre', 'imagen', 'orden')
    search_fields=['marca__nombre', 'imagen', 'orden']
    list_per_page=10
    
@admin.register(MarcaCategoriaImagen)
class MarcaCategoriaImagenAdmin(admin.ModelAdmin):
    @admin.display(description='imagen_foto')
    def imagen_foto(self, obj):
        return format_html('<img alt="{}" src="{}" title="{}" width="100px"/>'.format(obj.imagen.url, obj.imagen.url, obj.imagen))#obj.imagen=>Nombre de la imagen, obj.imagen.url=>URL de la imagen
            
    @admin.display(description='orden', ordering='orden')
    def orden_nuevo(self, obj):
        return obj.orden
        
    list_display=('marca', 'categoria', 'orden_nuevo', 'imagen', 'imagen_foto')
    list_filter=('marca__nombre', 'categoria__nombre', 'orden')
    search_fields=['marca__nombre', 'categoria__nombre', 'imagen', 'orden_nuevo']
    list_per_page=10
    
@admin.register(Modelo)
class ModeloAdmin(admin.ModelAdmin):
    list_display=['nombre', 'marca']
    list_filter=['nombre', 'marca']
    search_fields=['nombre', 'marca']
    list_per_page=10

@admin.register(Material)
class MaterialAdmin(admin.ModelAdmin):
    list_display=['nombre']
    list_filter=['nombre']
    search_fields=['nombre']
    list_per_page=10
    
@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display=['nombre']
    list_filter=['nombre']
    search_fields=['nombre']
    list_per_page=10
    
@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    # @admin.display(description='nivel')
    # def nivel_nombre(self, obj):
    #     return str(f'Nivel: {obj.nivel}')
    
    # @admin.display(description='nivel_padre')
    # def nivelpadre_nombre(self, obj):
    #     return str(f'NivelPadre: {obj.nivel_padre}')
    
    @admin.display(description='peso')
    def peso_nuevo(self, obj):
        if obj.magnitud.id>0 is not None and obj.peso>0: return str(obj.peso)+' '+str(obj.magnitud.unidad)
        
    list_display=('nombre', 'ceo', 'precio', 'peso_nuevo', 'categoria', 'marca', 'magnitud', 'modelo', 'material', 'color', 'estilo', 'acabado')
    list_filter=('nombre', 'categoria__nombre', 'marca__nombre', 'magnitud__simbolo', 'material__nombre', 'color__nombre', 'estilo__nombre', 'acabado__nombre')
    search_fields=['nombre', 'ceo', 'precio', 'peso', 'categoria', 'marca', 'magnitud', 'modelo', 'material', 'color', 'estilo', 'acabado', 'marca__nombre', 'categoria__nombre', 'categoria__nombre', 'marca__nombre', 'magnitud__simbolo', 'material__nombre', 'color__nombre', 'estilo__nombre', 'acabado__nombre', 'orden']
    list_per_page=10
    
@admin.register(ProductoImagen)
class ProductoImagenAdmin(admin.ModelAdmin):
    @admin.display(description='imagen_url')
    def imagen_url(self, obj):
        if obj.imagen.url is not None: return str(obj.imagen.url)
        else: return '-'

    @admin.display(description='imagen_foto')
    def imagen_foto(self, obj):
        if obj.imagen.url is not None: return format_html('<img alt="{}" src="{}" title="{}" width="100px"/>'.format(obj.imagen.url, obj.imagen.url, obj.imagen))
        else: return '-'
        
    @admin.display(description='orden_nuevo', ordering='orden_nuevo')
    def orden_nuevo(self, obj):
        return obj.orden
        
    list_display=('producto', 'orden', 'imagen_url', 'imagen_foto')
    list_filter=('producto__nombre', 'orden')
    search_fields=['producto__nombre', 'orden']
    list_per_page=10

admin.site.register(Cliente)
admin.site.register(Persona)

# @admin.register(Subcategoria)
# class SubcategoriaAdmin(admin.ModelAdmin):
#     list_display=('nombre', 'categoria')
#     # list_filter=('producto__nombre', 'imagen')
#     search_fields=['subcategoria__nombre', 'nombre']#producto__nombre => Acceder a objeto 'Producto' desde FK y obtener su 'nombre'