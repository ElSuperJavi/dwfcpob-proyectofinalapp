from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from cloudinary.models import CloudinaryField
from django.dispatch import receiver

# Create your models here.
class Magnitud(models.Model):
    unidad=models.CharField(max_length=255, null=True)
    simbolo=models.CharField(max_length=255, null=True)
    fecha_registro=models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table='tbl_magnitud'
        verbose_name='Magnitud'
        verbose_name_plural='Magnitudes'
        
    def __str__(self):
        return self.unidad
        
class Caracteristica(models.Model):
    atributo=models.CharField(max_length=200, null=True)
    magnitud=models.ForeignKey(Magnitud, on_delete=models.RESTRICT, related_name='caracteristicas')
    atributo2=models.CharField(max_length=200, null=True)
    magnitud2=models.ForeignKey(Magnitud, on_delete=models.RESTRICT, related_name='caracteristicas2')
    atributo3=models.CharField(max_length=200, null=True)
    magnitud3=models.ForeignKey(Magnitud, on_delete=models.RESTRICT, related_name='caracteristicas3')
    atributo4=models.CharField(max_length=200, null=True)
    magnitud4=models.ForeignKey(Magnitud, on_delete=models.RESTRICT, related_name='caracteristicas4')
    atributo5=models.CharField(max_length=200, null=True)
    magnitud5=models.ForeignKey(Magnitud, on_delete=models.RESTRICT, related_name='caracteristicas5')
    atributo6=models.CharField(max_length=200, null=True)
    magnitud6=models.ForeignKey(Magnitud, on_delete=models.RESTRICT, related_name='caracteristicas6')
    atributo7=models.CharField(max_length=200, null=True)
    magnitud7=models.ForeignKey(Magnitud, on_delete=models.RESTRICT, related_name='caracteristicas7')
    atributo8=models.CharField(max_length=200, null=True)
    magnitud8=models.ForeignKey(Magnitud, on_delete=models.RESTRICT, related_name='caracteristicas8')
    atributo9=models.CharField(max_length=200, null=True)
    magnitud9=models.ForeignKey(Magnitud, on_delete=models.RESTRICT, related_name='caracteristicas9')
    atributo10=models.CharField(max_length=200, null=True)
    magnitud10=models.ForeignKey(Magnitud, on_delete=models.RESTRICT, related_name='caracteristicas10')
    fecha_registro=models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table='tbl_caracteristica'
        verbose_name='Característica'
        verbose_name_plural='Características'
        
    def __str__(self):
        return self.atributo
        
class Categoria(models.Model):
    nombre=models.CharField(max_length=200)
    ceo=models.CharField(max_length=200, null=True, unique=False)
    imagen=models.ImageField(blank=True, default='', null=True, upload_to='categoria', verbose_name='imagen_ruta')
    # imagen=CloudinaryField('img', blank=True, default='', null=True, verbose_name='imagen_ruta')
    fecha_registro=models.DateTimeField(auto_now=True)
    nivel=models.IntegerField(default=0)
    nivel_padre=models.IntegerField(default=0)
    caracteristica=models.ForeignKey(Caracteristica, on_delete=models.RESTRICT)
    
    class Meta:
        db_table='tbl_categoria'
        verbose_name='Categoría'
        verbose_name_plural='Categorías'
        
    def __str__(self):
        return self.nombre
        
class Marca(models.Model):
    nombre=models.CharField(max_length=200)
    ceo=models.CharField(max_length=200, null=True, unique=True)
    # imagen=models.ImageField(blank=True, default='', null=True, upload_to='marca', verbose_name='imagen_ruta')
    fecha_registro=models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table='tbl_marca'
        verbose_name='Marca'
        verbose_name_plural='Marcas'
        
    def __str__(self):
        return self.nombre
        
class MarcaImagen(models.Model):
    nombre=models.CharField(max_length=200)
    ceo=models.CharField(max_length=200, null=True)
    imagen=models.ImageField(blank=True, default='', null=True, upload_to='marca/banner', verbose_name='imagen_ruta')
    orden=models.IntegerField(default=1)
    fecha_registro=models.DateTimeField(auto_now=True)
    marca=models.ForeignKey(Marca, on_delete=models.RESTRICT, related_name='marca_imagenes')
    
    class Meta:
        db_table='tbl_marca_imagen'
        verbose_name='Marca - Imagen'
        verbose_name_plural='Marca - Imágenes'
        
    def __str__(self):
        return str(self.imagen)
        
class MarcaCategoriaImagen(models.Model):
    nombre=models.CharField(max_length=200)
    ceo=models.CharField(max_length=200, null=True)
    imagen=models.ImageField(blank=True, default='', null=True, upload_to='marca/categoria', verbose_name='imagen_ruta')
    orden=models.IntegerField(default=1)
    fecha_registro=models.DateTimeField(auto_now=True)
    marca=models.ForeignKey(Marca, on_delete=models.RESTRICT, related_name='marca_categoria_imagenes')
    categoria=models.ForeignKey(Categoria, on_delete=models.RESTRICT)
    
    class Meta:
        db_table='tbl_marcacategoria_imagen'
        verbose_name='Marca - Categoría - Imagen'
        verbose_name_plural='Marca - Categoría - Imágenes'
        
    def __str__(self):
        return str(self.imagen)
        
class Modelo(models.Model):
    nombre=models.CharField(max_length=255, null=True)
    fecha_registro=models.DateTimeField(auto_now=True)
    marca=models.ForeignKey(Marca, on_delete=models.RESTRICT, related_name='modelos')
    
    class Meta:
        db_table='tbl_modelo'
        verbose_name='Modelo'
        verbose_name_plural='Modelos'
        
    def __str__(self):
        return self.nombre
        
class Material(models.Model):
    nombre=models.CharField(max_length=255, null=True)
    ceo=models.CharField(max_length=200, null=True)
    fecha_registro=models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table='tbl_material'
        verbose_name='Material'
        verbose_name_plural='Materiales'
        
    def __str__(self):
        return self.nombre
        
class Color(models.Model):
    nombre=models.CharField(max_length=255, null=True)
    ceo=models.CharField(max_length=200, null=True)
    fecha_registro=models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table='tbl_color'
        verbose_name='Color'
        verbose_name_plural='Colores'
        
    def __str__(self):
        return self.nombre
        
class Estilo(models.Model):
    nombre=models.CharField(max_length=255, null=True)
    ceo=models.CharField(max_length=200, null=True)
    fecha_registro=models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table='tbl_estilo'
        verbose_name='Estilo'
        verbose_name_plural='Estilos'
        
    def __str__(self):
        return self.nombre
        
class Acabado(models.Model):
    nombre=models.CharField(max_length=255, null=True)
    ceo=models.CharField(max_length=200, null=True)
    fecha_registro=models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table='tbl_acabado'
        verbose_name='Acabado'
        verbose_name_plural='Acabados'
        
    def __str__(self):
        return self.nombre
        
class Producto(models.Model):
    nombre=models.CharField(max_length=255, null=True)
    ceo=models.CharField(max_length=200, null=True)
    descripcion=models.TextField(null=True)
    precio=models.DecimalField(decimal_places=2, default=0, max_digits=10)
    peso=models.DecimalField(decimal_places=2, default=0, max_digits=10)
    dimension=models.CharField(default= '', max_length=200, null=True)
    dimension2=models.CharField(default= '', max_length=200, null=True)
    dimension3=models.CharField(default= '', max_length=200, null=True)
    dimension4=models.CharField(default= '', max_length=200, null=True)
    dimension5=models.CharField(default= '', max_length=200, null=True)
    dimension6=models.CharField(default= '', max_length=200, null=True)
    dimension7=models.CharField(default= '', max_length=200, null=True)
    dimension8=models.CharField(default= '', max_length=200, null=True)
    dimension9=models.CharField(default= '', max_length=200, null=True)
    dimension10=models.CharField(default= '', max_length=200, null=True)
    sku=models.CharField(max_length=10, editable=False, null=True, unique=True)
    fecha_registro=models.DateTimeField(auto_now=True)
    categoria=models.ForeignKey(Categoria, on_delete=models.RESTRICT, related_name='productos')
    marca=models.ForeignKey(Marca, on_delete=models.RESTRICT, related_name='productos')
    magnitud=models.ForeignKey(Magnitud, on_delete=models.RESTRICT)
    modelo=models.ForeignKey(Modelo, on_delete=models.RESTRICT, related_name='productos')
    material=models.ForeignKey(Material, on_delete=models.RESTRICT, related_name='productos')
    color=models.ForeignKey(Color, on_delete=models.RESTRICT, related_name='productos')
    estilo=models.ForeignKey(Estilo, on_delete=models.RESTRICT, related_name='productos')
    acabado=models.ForeignKey(Acabado, on_delete=models.RESTRICT, related_name='productos')
    
    class Meta:
        db_table='tbl_producto'
        verbose_name='Producto'
        verbose_name_plural='Productos'
        
    def __str__(self):
        return self.nombre
        
@receiver(post_save, sender=Producto)
def generar_sku(sender, instance, created, **kwargs):
    if created:
        categoria_cod=instance.categoria.nombre[:2].upper()#2 Primeros caracteres del 'nombre de la categoría'
        categoria_cod=categoria_cod.replace('/', '0')
        correlativo=str(Producto.objects.count()).zfill(3)#Rellena ceros en 3 posiciones
        instance.sku=f'{categoria_cod}{correlativo}'
        instance.save()
        
class ProductoImagen(models.Model):
    nombre=models.CharField(max_length=200)
    ceo=models.CharField(max_length=200, null=True)
    imagen=CloudinaryField('img', blank=True, default='', null=True)
    orden=models.IntegerField(default=1)
    fecha_registro=models.DateTimeField(auto_now=True)
    producto=models.ForeignKey(Producto, on_delete=models.RESTRICT, related_name='producto_imagenes')
    
    class Meta:
        db_table='tbl_producto_imagen'
        verbose_name='Producto - imagen'
        verbose_name_plural='Producto - Imágenes'
        
    def __str__(self):
        return str(self.imagen) if self.imagen.url is not None else 'Sin imagen'

class Persona(models.Model):
    genero_choices=(('F', 'Femenino'), ('M', 'Masculino'), ('O', 'Otro'))
    nombre=models.CharField(max_length=200, null=True)
    apellido_paterno=models.CharField(max_length=200, null=True)
    apellido_materno=models.CharField(max_length=200, null=True)
    genero=models.CharField(max_length=1, default='M', choices=genero_choices)
    fecha_nacimiento=models.DateField(null=True)
    
    class Meta:
        db_table='tbl_persona'
        verbose_name='Persona'
        verbose_name_plural='Personas'
        
    def __str__(self):
        return self.nombre+' '+self.apellido_paterno
        
class Cliente(models.Model):
    telefono=models.CharField(max_length=200, null=True)
    direccion=models.TextField(null=True)
    persona=models.OneToOneField(Persona, on_delete=models.RESTRICT)
    usuario=models.OneToOneField(User, on_delete=models.RESTRICT)
    
    class Meta:
        db_table='tbl_cliente'
        verbose_name='Cliente'
        verbose_name_plural='Clientes'
        
    def __str__(self):
        return self.persona.nombre+' '+self.persona.apellido_paterno
        
class Orden(models.Model):
    estado_choices=(('1', 'Pendiente'), ('2', 'Completado'))
    codigo=models.CharField(max_length=10, editable=False, null=True, unique=True)
    estado=models.CharField(max_length=1, default='1', choices=estado_choices)
    precio_total=models.DecimalField(decimal_places=2, default=0, max_digits=10)
    descuento=models.DecimalField(decimal_places=2, default=0, max_digits=10)
    fecha_registro=models.DateTimeField(auto_now_add=True)
    cliente=models.ForeignKey(Cliente, on_delete=models.RESTRICT, related_name='ordenes')
    
    class Meta:
        db_table='tbl_orden'
        verbose_name='Orden'
        verbose_name_plural='Órdenes'
        
    def __str__(self):
        return self.codigo
        
@receiver(post_save, sender=Orden)
def generar_codigo(sender, instance, created, **kwargs):
    if created:
        orden_prefijo='PED'
        correlativo=str(Orden.objects.count()).zfill(7)
        instance.codigo=f'{orden_prefijo}{correlativo}'
        instance.save()
        
class OrdenDetalle(models.Model):
    precio=models.DecimalField(decimal_places=2, default=0, max_digits=10)
    cantidad=models.IntegerField(default=1)
    subtotal=models.DecimalField(decimal_places=2, default=0, max_digits=10)
    fecha_registro=models.DateTimeField(auto_now_add=True)
    producto=models.ForeignKey(Producto, on_delete=models.RESTRICT)
    orden=models.ForeignKey(Orden, on_delete=models.RESTRICT, related_name='orden_detalles')
    
    class Meta:
        db_table='tbl_orden_detalle'
        verbose_name='Orden Detalle'
        verbose_name_plural='Órdenes Detalles'
        
    def __str__(self):
        return self.orden.codigo+' '+self.producto.nombre
            
# class Subcategoria(models.Model):
#     nombre=models.CharField(max_length=200)
#     categoria=models.ForeignKey(Categoria, related_name='Categorias', on_delete=models.RESTRICT)
    
#     class Meta:
#         db_table='tbl_subcategoria'
#         verbose_name='Subcategoría'
#         verbose_name_plural='Subcategorías'
        
#     def __str__(self):
#         return self.nombre