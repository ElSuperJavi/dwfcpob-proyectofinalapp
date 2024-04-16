from rest_framework import serializers
from .models import (
    Categoria,
    Cliente,
    Marca,
    MarcaImagen,
    MarcaCategoriaImagen,
    Orden,
    OrdenDetalle,
    Persona,
    Producto,
    ProductoImagen
                    #  , Subcategoria
)
from django.contrib.auth.models import User

# class SubcategoriaSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=Subcategoria
#         fields='__all__'
        
#     def to_representation(self, instancia):
#         representacion=super().to_representation(instancia)
#         return representacion
    
class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categoria
        fields='__all__'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion

class CategoriaDetalleSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categoria
        fields='__all__'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
    
class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Marca
        fields='__all__'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
        
class MarcaImagenSerializer(serializers.ModelSerializer):
    class Meta:
        model=MarcaImagen
        fields='__all__'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
        
class MarcaCategoriaImagenSerializer(serializers.ModelSerializer):
    class Meta:
        model=MarcaCategoriaImagen
        fields='__all__'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion

class MarcaDetalleSerializer(serializers.ModelSerializer):
    marca_imagenes=MarcaImagenSerializer(many=True, read_only=True)
    marca_categoria_imagenes=MarcaCategoriaImagenSerializer(many=True, read_only=True)
    class Meta:
        model=Marca
        fields='__all__'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        # representacion['categoria']=self.get_categoria(instancia)
        return representacion
        
    # def get_categoria(self, instancia):
    #     categoria=instancia.categoria
    #     categoria_serializer=CategoriaSerializer(categoria)
    #     return categoria_serializer.data
    
# class MarcaCategoriaImagenSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=MarcaCategoriaImagen
#         fields='__all__'
        
#     def to_representation(self, instancia):
#         representacion=super().to_representation(instancia)
#         return representacion

class MarcaCategoriaImagenDetalleSerializer(serializers.ModelSerializer):
    # categoria_datos=CategoriaSerializer(source='categoria', read_only=True)
    marca_categoria_imagenes_datos=MarcaCategoriaImagenSerializer(source='marca_categoria_imagen', read_only=True)
    class Meta:
        model=MarcaCategoriaImagen
        fields='id', 'nombre', 'ceo', 'fecha_registro', 'marca_categoria_imagenes_datos'

    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion

#class MarcaCategoriaImagenDetalleSerializer(serializers.ModelSerializer):
#    # marca_categoria_imagenes=MarcaCategoriaImagenSerializer(many=True, read_only=True)
#    marca_categoria_imagenes_datos=MarcaCategoriaImagenSerializer(source='marca_categoria_imagen', read_only=True)
#    class Meta:
#        model=Marca
#        # fields='__all__'
#        fields='id', 'nombre', 'ceo', 'marca_categoria_imagenes_datos'
#
#    def to_representation(self, instancia):
#        representacion=super().to_representation(instancia)
#        representacion['marca_categoria_imagen']=instancia.marca_categoria_imagenes.first().imagen.url if instancia.marca_categoria_imagenes.exists() else None
#        return representacion
    
class ProductoImagenSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductoImagen
        fields='__all__'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        representacion['imagen']=instancia.imagen.url if instancia.imagen.url else None
        return representacion
    
class ProductoSerializer(serializers.ModelSerializer):
    producto_imagenes=ProductoImagenSerializer(many=True, read_only=True)
    categoria_datos=CategoriaSerializer(source='categoria', read_only=True)
    class Meta:
        model=Producto
        # fields='__all__'
        fields='id', 'nombre', 'ceo', 'descripcion', 'precio', 'peso', 'dimension', 'dimension2', 'dimension3', 'dimension4', 'dimension5', 'dimension6', 'dimension7', 'dimension8', 'dimension9', 'dimension10', 'sku', 'fecha_registro', 'categoria_id', 'marca_id', 'magnitud_id', 'modelo_id', 'material_id', 'color_id', 'estilo_id', 'acabado_id', 'producto_imagenes', 'categoria_datos'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        # representacion['producto_imagen_id']=instancia.producto_imagenes#Si no existe este campo en la clase serializer lo 'crea', sino lo 'modifica'
        representacion['producto_imagen']=instancia.producto_imagenes.first().imagen.url if instancia.producto_imagenes.exists() else None
        representacion['categoria_nombre']=instancia.categoria.nombre if instancia.categoria.nombre else ''
        representacion['marca_nombre']=instancia.marca.nombre if instancia.marca.nombre else ''
        representacion['marca_ceo']=instancia.marca.ceo if instancia.marca.ceo else ''
        representacion['magnitud_simbolo']=instancia.magnitud.simbolo if instancia.magnitud.simbolo else ''
        representacion['modelo_nombre']=instancia.modelo.nombre if instancia.modelo.nombre else ''
        representacion['material_nombre']=instancia.material.nombre if instancia.material.nombre else ''
        representacion['color_nombre']=instancia.color.nombre if instancia.color.nombre else ''
        representacion['estilo_nombre']=instancia.estilo.nombre if instancia.estilo.nombre else ''
        representacion['acabado_nombre']=instancia.acabado.nombre if instancia.acabado.nombre else ''
        return representacion

class ProductoDetalleSerializer(serializers.ModelSerializer):
    # sku=serializers.CharField() # Agregando mi campo 'sku' al serializer
    producto_imagenes=ProductoImagenSerializer(many=True, read_only=True)
    categoria_datos=CategoriaSerializer(source='categoria', read_only=True)
    
    class Meta:
        model = Producto
        fields = '__all__'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        representacion['producto_imagen']=instancia.producto_imagenes.first().imagen.url if instancia.producto_imagenes.exists() else None
        representacion['categoria_nombre']=instancia.categoria.nombre if instancia.categoria.nombre else ''
        representacion['marca_nombre']=instancia.marca.nombre if instancia.marca.nombre else ''
        representacion['marca_ceo']=instancia.marca.ceo if instancia.marca.ceo else ''
        representacion['magnitud_simbolo']=instancia.magnitud.simbolo if instancia.magnitud.simbolo else ''
        representacion['modelo_nombre']=instancia.modelo.nombre if instancia.modelo.nombre else ''
        representacion['material_nombre']=instancia.material.nombre if instancia.material.nombre else ''
        representacion['color_nombre']=instancia.color.nombre if instancia.color.nombre else ''
        representacion['estilo_nombre']=instancia.estilo.nombre if instancia.estilo.nombre else ''
        representacion['acabado_nombre']=instancia.acabado.nombre if instancia.acabado.nombre else ''
        return representacion
        
class CategoriaNivelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categoria
        # fields='id', 'nombre'
        fields='__all__'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
        
class ProductoBuscadorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields='__all__'
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
        
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        # fields='__all__'
        fields=['username', 'first_name', 'last_name', 'email', 'password']
        extra_kwargs={'password': {'write_only': True}}# Para configurar el campo de contraseña (password) como write_only, lo que significa que no se mostrará en las respuestas de lectura (por ejemplo, al listar usuarios; o al buscar usuario, por default encripta la contraseña).
        
    # create: Permite agregar lógica personalizada para validar los datos antes de guardar un nuevo objeto.
    def create(self, validar):
        usuario=User(
            username=validar['username'],
            first_name=validar['first_name'],
            last_name=validar['last_name'],
            email=validar['email']
        )
        usuario.set_password(validar['password'])
        usuario.save()
        return usuario
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
        
class UsuarioDetalleSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id', 'username', 'first_name', 'last_name', 'email']
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
        
class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Persona
        fields='__all__'
        
    def create(self, validar):
        persona=Persona(
            nombre=validar['nombre'],
            apellido_paterno=validar['apellido_paterno'],
            apellido_materno=validar['apellido_materno'],
            genero=validar['genero'],
            fecha_nacimiento=validar['fecha_nacimiento'],
        )
        persona.save()
        return persona
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
        
class ClienteSerializer(serializers.ModelSerializer):
    # persona_dato=PersonaSerializer(source='persona', read_only=True)
    # usuario_dato=UsuarioSerializer(source='usuario', read_only=True)
    persona=PersonaSerializer()
    usuario=UsuarioSerializer()
    class Meta:
        model=Cliente
        # fields='telefono', 'direccion', 'persona_dato', 'usuario_dato'
        # fields='__all__'
        fields='id', 'telefono', 'direccion', 'persona', 'usuario'
        
    def create(self, validar):
        persona_datos=validar.pop('persona')
        usuario_datos=validar.pop('usuario')
        persona=Persona.objects.create(**persona_datos)
        usuario=User.objects.create_user(**usuario_datos)
        cliente=Cliente.objects.create(usuario=usuario, persona=persona,**validar)
        return cliente
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
        
class ClienteDetalleSerializer(serializers.ModelSerializer):
    persona=PersonaSerializer()
    usuario=UsuarioSerializer()
    class Meta:
        model=Cliente
        # fields='__all__'
        fields=['id', 'telefono', 'direccion', 'persona', 'usuario']
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
        
class OrdenDetalleSerializer(serializers.ModelSerializer):
    producto=ProductoSerializer()
    class Meta:
        model=OrdenDetalle
        fields=('precio', 'cantidad', 'subtotal', 'producto')
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion
        
class OrdenClienteSerializer(serializers.ModelSerializer):
    orden_detalles=OrdenDetalleSerializer(many=True)
    cliente=ClienteSerializer()
    fecha_registro=serializers.DateTimeField(format="%d/%m/%Y %H:%M:%S %p")
    class Meta:
        model=Orden
        fields=['codigo', 'estado', 'precio_total', 'descuento', 'fecha_registro', 'orden_detalles', 'cliente']
        
class OrdenSerializer(serializers.ModelSerializer):
    orden_detalles=OrdenDetalleSerializer(many=True)
    class Meta:
        model=Orden
        fields=['codigo', 'estado', 'precio_total', 'descuento', 'cliente', 'orden_detalles']
        
    def create(self, validar):
        orden_detalle_datos=validar.pop('orden_detalles')
        orden=Orden.objects.create(**validar)
        for orden_detalle_dato in orden_detalle_datos:
            OrdenDetalle.objects.create(orden=orden, **orden_detalle_dato)
        return orden
        
    def to_representation(self, instancia):
        representacion=super().to_representation(instancia)
        return representacion