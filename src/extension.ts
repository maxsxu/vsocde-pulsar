// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('"vscode-pulsar" is activated.');

	context.subscriptions.push(vscode.commands.registerCommand('vscode-pulsar.cluster.add', () => {
		vscode.window.showInformationMessage("Add Pulsar Cluster");

		vscode.window.showInputBox({title: "Input the pulsar cluster address"}).then((address) => {
			console.log("pulsar cluster address:", address);
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vscode-pulsar.cluster.delete', () => {
		vscode.window.showInformationMessage("Delete Pulsar Cluster");
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log('"vscode-pulsar" is now deactivated.');
}
