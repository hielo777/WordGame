const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.AJAX,
		C3.Plugins.Json,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.TextBox,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Sprite,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.tokencount,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Text.Acts.SetPosToObject,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.System.Cnds.ForEachOrdered,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.Text.Acts.AppendText,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Exps.find
	];
};
self.C3_JsPropNameTable = [
	{AJAX: 0},
	{JSON: 0},
	{Text4Test: 0},
	{ButtonCheck: 0},
	{TextArea: 0},
	{DragDrop: 0},
	{letterHolder: 0},
	{letterValue: 0},
	{letterBlock: 0},
	{wordToFind: 0},
	{pickedWord: 0},
	{ButtonPick: 0},
	{foundWord: 0},
	{onlyWordsHolder: 0},
	{totalWordsOnly: 0},
	{foundWordInDictionary: 0}
];

self.InstanceType = {
	AJAX: class extends self.IInstance {},
	JSON: class extends self.IJSONInstance {},
	Text4Test: class extends self.ITextInstance {},
	ButtonCheck: class extends self.IButtonInstance {},
	TextArea: class extends self.ITextInputInstance {},
	letterHolder: class extends self.ITextInstance {},
	letterBlock: class extends self.ISpriteInstance {},
	wordToFind: class extends self.ITextInstance {},
	pickedWord: class extends self.ITextInstance {},
	ButtonPick: class extends self.IButtonInstance {},
	foundWord: class extends self.ITextInstance {}
}