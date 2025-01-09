// Final
scene.onOverlapTile(SpriteKind.Player, img`
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
`, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    game.gameOver(true)
})
// Escena
scene.setBackgroundImage(assets.image`Arboles rosas`)
tiles.setCurrentTilemap(tilemap`nivel1`)
// Personaje
let pato = sprites.create(assets.image`Patito`, SpriteKind.Player)
controller.moveSprite(pato)
pato.setScale(0.8, ScaleAnchor.Middle)
tiles.placeOnTile(pato, tiles.getTileLocation(0, 1))
scene.cameraFollowSprite(pato)
