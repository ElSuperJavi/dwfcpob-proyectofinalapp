from django.contrib import admin
from django.urls import include, path
from . import views
urlpatterns=[
    # path('subcategoria/', views.SubcategoriaView.as_view()),
    path('categoria/', views.CategoriaView.as_view()),
    path('marca/', views.MarcaView.as_view()),
    # path('marca/<int:id>', views.MarcaDetalleView.as_view()),
    path('marca/<str:ceo>', views.MarcaDetalleCeoView.as_view()),
    # path('marcacategoria/', views.MarcaCategoriaImagenView.as_view()),
    # path('marcacategoria/<int:marca_id>', views.MarcaCategoriaImagenDetalleView.as_view()),
    path('categoria/<int:id>', views.CategoriaDetalleView.as_view()),
    path('categoria/nivel/<int:nivel>', views.CategoriaNivelView.as_view()),
    path('producto/', views.ProductoView.as_view()),
    # path('producto/<int:id>', views.ProductoDetalleView.as_view()),
    path('producto/sku/<str:sku>', views.ProductoDetalleView.as_view()),
    path('producto/buscar/<str:nombre>', views.ProductoBuscadorView.as_view()),
    # path('producto/', include('api.urls'))
    path('usuario/', views.UsuarioView.as_view()),
    path('usuario/<int:id>', views.UsuarioDetalleView.as_view()),
    path('cliente/', views.ClienteView.as_view()),
    path('cliente/<int:id>', views.ClienteDetalleView.as_view()),
    path('cliente/usuario_id/<int:id>', views.ClienteUsuarioDetalleView.as_view()),
    path('orden', views.OrdenView.as_view()),
    path('orden/cliente_id/<int:id>', views.OrdenClienteView.as_view())
]