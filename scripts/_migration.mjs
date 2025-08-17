import { MODULE } from './_module.mjs';

Hooks.once('ready', async () => {
        if (foundry.utils.isNewerVersion('2.1.4', MODULE.setting('clientMigratedVersion'))) {
                ui.notifications.info(`<strong>${MODULE.TITLE}:</strong> ${MODULE.localize('migration.v214.smartLabels')}`);
                await MODULE.setting('smartLabels', MODULE.setting('autoPrefixModules') ?? true);
                await MODULE.setting('clientMigratedVersion', '2.1.4');
                await MODULE.setting('worldMigratedVersion', '2.1.4');
        }
});
