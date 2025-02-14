const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.MoveTo,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Acts.StartAnim
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{DesplazarHasta: 0},
	{Personaje: 0},
	{Sólido: 0},
	{Teclado: 0},
	{MoverA: 0},
	{Enemigo: 0},
	{Moneda: 0},
	{FondoEnMosaico: 0}
];

self.InstanceType = {
	Personaje: class extends self.ISpriteInstance {},
	Plataforma: class extends self.ITiledBackgroundInstance {},
	Teclado: class extends self.IInstance {},
	Enemigo: class extends self.ISpriteInstance {},
	Moneda: class extends self.ISpriteInstance {},
	FondoEnMosaico: class extends self.ITiledBackgroundInstance {}
}