# PowerJack

PowerJack is a simple and user-friendly website to help you quickly find and manage your powerups on xyzzy’s server.

Run the powerjack.html file to open the website.
The interface is intuitive and easy to use.

## Features

- View and search all your powerups
- Add your own custom powerups
- Edit or remove existing powerups
- Enable or disable powerups
- Save your powerups locally
- Export your data as a JSON file
- Import powerups from a JSON file

All data is stored locally in your browser. No account is required.
### Powerups are not translated as you are free to modify them and create new one.

## Custom Backup for Powerups

If you have a custom backup for powerups, be aware that you should **translate only the fields `name` and `effect`**.

This is an example:

```json
{
  "id": 1766165877541,
  "name": "Peau de Banane",
  "effect": "Retirer la main et garder l'argent",
  "target": ["Me"],
  "timing": ["Not usable if busted", "Before dealer turn", "My turn"],
  "active": false,
  "favorite": false
}
