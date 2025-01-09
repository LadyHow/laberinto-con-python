// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101020001000100000000010000000100030100010001000000000100010000000101000100010101010001000100010001010000000000000000000001000100010101010101010001010100010000010101000000000100000100000101000101010101010001010001000101000000010100000000010000010001000001010101010101000100000000010001010001010000010000000001010100010100010101000101010100010000000101000101010000000000000100000000000001010101010101010001010101010100010100000000000000000000000000000101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . 2 . . . . 2 . . . 2 . . 
2 . 2 . 2 . . . . 2 . 2 . . . 2 
2 . 2 . 2 2 2 2 . 2 . 2 . 2 . 2 
2 . . . . . . . . . . 2 . 2 . 2 
2 2 2 2 2 2 . 2 2 2 . 2 . . 2 2 
2 . . . . 2 . . 2 . . 2 2 . 2 2 
2 2 2 2 . 2 2 . 2 . 2 2 . . . 2 
2 . . . . 2 . . 2 . 2 . . 2 2 2 
2 2 2 2 . 2 . . . . 2 . 2 2 . 2 
2 . . 2 . . . . 2 2 2 . 2 2 . 2 
2 2 . 2 2 2 2 . 2 . . . 2 2 . 2 
2 2 . . . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
