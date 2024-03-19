import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('buttonbuddy.undo', () => { vscode.commands.executeCommand('undo') }),
		vscode.commands.registerCommand('buttonbuddy.redo', () => { vscode.commands.executeCommand('redo') }),
		vscode.commands.registerCommand('buttonbuddy.debug', () => { vscode.commands.executeCommand('workbench.action.debug.start') }),
		vscode.commands.registerCommand('buttonbuddy.build', () => { vscode.commands.executeCommand('workbench.action.tasks.build') }),
		vscode.commands.registerCommand('buttonbuddy.comment', () => { vscode.commands.executeCommand('editor.action.commentLine') }),
		vscode.commands.registerCommand('buttonbuddy.openQuickFix', function () {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				vscode.commands.executeCommand('editor.action.quickFix');
			}
		})
	);
}

// This method is called when your extension is deactivated
export function deactivate() { }
