const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.AJAX,
		C3.Plugins.Json,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.TextBox,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.tokencount
	];
};
self.C3_JsPropNameTable = [
	{AJAX: 0},
	{JSON: 0},
	{Text4Test: 0},
	{Button: 0},
	{TextArea: 0},
	{onlyWordsHolder: 0},
	{totalWordsOnly: 0}
];

self.InstanceType = {
	AJAX: class extends self.IInstance {},
	JSON: class extends self.IJSONInstance {},
	Text4Test: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	TextArea: class extends self.ITextInputInstance {}
}