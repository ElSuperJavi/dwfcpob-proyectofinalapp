from rest_framework import generics
from .models import (
    Categoria,
    Cliente,
    Marca,
    MarcaCategoriaImagen,
    Orden,
    Producto
    #  , Subcategoria
)
from django.contrib.auth.models import User
from .serializers import (
CategoriaSerializer,
CategoriaDetalleSerializer,
CategoriaNivelSerializer,
ClienteSerializer,
ClienteDetalleSerializer,
MarcaSerializer,
MarcaDetalleSerializer,
MarcaCategoriaImagenSerializer,
MarcaCategoriaImagenDetalleSerializer,
OrdenSerializer,
OrdenClienteSerializer,
ProductoSerializer,
ProductoBuscadorSerializer,
ProductoDetalleSerializer,
UsuarioSerializer,
UsuarioDetalleSerializer
                        #   , SubcategoriaSerializer
                          )

# Create your views here.
# class SubcategoriaView(generics.ListCreateAPIView):
#     queryset=Subcategoria.objects.all()
#     serializer_class=SubcategoriaSerializer
    
class CategoriaView(generics.ListCreateAPIView):
    queryset=Categoria.objects.all()
    serializer_class=CategoriaSerializer
        
class CategoriaDetalleView(generics.RetrieveUpdateDestroyAPIView):
    lookup_url_kwarg='id'
    queryset=Categoria.objects.all()
    serializer_class=CategoriaDetalleSerializer
    
class MarcaView(generics.ListCreateAPIView):
    queryset=Marca.objects.all()
    serializer_class=MarcaSerializer
    
# class MarcaDetalleView(generics.RetrieveUpdateDestroyAPIView):
#     lookup_url_kwarg='id'
#     queryset=Marca.objects.all()
#     serializer_class=MarcaDetalleSerializer
    
class MarcaDetalleCeoView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field='ceo'
    queryset=Marca.objects.all()
    serializer_class=MarcaDetalleSerializer
    def get_object(self):
        ceo=self.kwargs['ceo']
        return Marca.objects.get(ceo__iexact=ceo)
    
# class MarcaCategoriaImagenView(generics.ListCreateAPIView):
#     queryset=MarcaCategoriaImagen.objects.all()
#     serializer_class=MarcaCategoriaImagenSerializer
    
# class MarcaCategoriaImagenDetalleView(generics.RetrieveUpdateDestroyAPIView):
#     lookup_url_kwarg='marca_id'
#     queryset=MarcaCategoriaImagen.objects.all()
#     serializer_class=MarcaCategoriaImagenDetalleSerializer
    
class ProductoView(generics.ListCreateAPIView):
    queryset=Producto.objects.all()
    serializer_class=ProductoSerializer
    
class ProductoDetalleView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field='sku'
    queryset=Producto.objects.all()
    serializer_class=ProductoDetalleSerializer
    def get_object(self):
        sku=self.kwargs['sku']#campo__iexact: Abajo ignorar las mayúsculas y minúsculas
        producto=Producto.objects.get(sku__iexact=sku)# return Producto.objects.get(sku=sku)
        return producto
    
class ProductoBuscadorView(generics.ListAPIView):
    lookup_field='nombre'
    # queryset=Producto.objects.all()
    serializer_class=ProductoBuscadorSerializer
    def get_queryset(self):
        nombre=self.kwargs['nombre']
        return Producto.objects.filter(nombre__icontains=nombre)
    
class CategoriaNivelView(generics.ListAPIView):
    lookup_field='nivel'
    queryset=Categoria.objects.all()
    serializer_class=CategoriaNivelSerializer
    def get_queryset(self):
        nivel=self.kwargs['nivel']
        return Categoria.objects.filter(nivel=nivel)
        
class UsuarioView(generics.ListCreateAPIView):
    queryset=User.objects.all()
    serializer_class=UsuarioSerializer
        
class UsuarioDetalleView(generics.RetrieveUpdateDestroyAPIView):
    lookup_url_kwarg='id'
    queryset=User.objects.all()
    serializer_class=UsuarioDetalleSerializer
        
class ClienteView(generics.ListCreateAPIView):
    queryset=Cliente.objects.all()
    serializer_class=ClienteSerializer
        
class ClienteDetalleView(generics.RetrieveUpdateDestroyAPIView):
    lookup_url_kwarg='id'
    queryset=Cliente.objects.all()
    serializer_class=ClienteDetalleSerializer
        
class ClienteUsuarioDetalleView(generics.RetrieveUpdateDestroyAPIView):
    # lookup_url_kwarg='id'
    queryset=Cliente.objects.all()
    serializer_class=ClienteDetalleSerializer
    def get_object(self):
        id=self.kwargs['id']
        usuario=User.objects.get(pk=id)
        cliente=Cliente.objects.filter(usuario=usuario).first()
        return cliente
        
class OrdenView(generics.ListCreateAPIView):
    lookup_url_kwarg='id'
    queryset=Orden.objects.all()
    serializer_class=OrdenSerializer
        
class OrdenClienteView(generics.ListAPIView):
    # lookup_url_kwarg='id'
    lookup_field='id'
    queryset=Orden.objects.all()
    serializer_class=OrdenClienteSerializer
    def get_queryset(self):
        cliente_id=self.kwargs['id']
        ordenes=Orden.objects.filter(cliente_id=cliente_id)
        return ordenes
        
class OrdenClienteDetalleView(generics.RetrieveUpdateDestroyAPIView):
    # lookup_url_kwarg='id'
    lookup_field='id'
    queryset=Orden.objects.all()
    serializer_class=OrdenClienteSerializer
    def get_queryset(self):
        cliente_id=self.kwargs['id']
        ordenes=Orden.objects.filter(cliente_id=cliente_id)
        return ordenes