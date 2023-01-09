import os
import json
from mkdocs import utils
from mkdocs.plugins import BasePlugin
from mkdocs.config.base import Config
from mkdocs.config import config_options as co

class WidgetConfig(Config):
    output = co.Type(str, default='contexty')

class Widget(BasePlugin[WidgetConfig]):
    def __init__(self):
        self.result = {}

    def on_page_context(self, context, page, config, nav):
        # debug print all variables
        if not 'contexty' in page.meta:
            return context

        info = {
            'title': page.title,
            'url': page.canonical_url,
        }

        if 'description' in page.meta:
            info['description'] = page.meta['description']

        name_list = page.meta['contexty']
        for name in name_list:
            if not name in self.result:
                self.result[name] = []

            self.result[name].append(info)

        return context

    def on_post_build(self, config):
        # debug print all variables
        output_path = os.path.join(config.site_dir, self.config.output)
        result = json.dumps(self.result)
        utils.write_file(result.encode('utf-8'), output_path)
