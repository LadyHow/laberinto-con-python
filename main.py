#Final
def on_overlap_tile(sprite, location):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player, img("""
    b d d d d d d d d d d d d d d c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    d b b b b b b b b b b b b b b c
    c c c c c c c c c c c c c c c a
"""), on_overlap_tile)

#Escena
scene.set_background_image(assets.image("""Arboles rosas"""))
tiles.set_current_tilemap(tilemap("""nivel1"""))

#Personaje
pato = sprites.create(assets.image("""Patito"""), SpriteKind.player)
controller.move_sprite(pato)
pato.set_scale(0.8, ScaleAnchor.MIDDLE)
tiles.place_on_tile(pato, tiles.get_tile_location(0, 1))
scene.camera_follow_sprite(pato)

