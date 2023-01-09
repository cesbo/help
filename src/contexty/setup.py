from distutils.core import setup

setup(
    name='contexty',
    version='0.1',
    description='MkDocs plugin to generate contexty.json for help widget',
    keywords='mkdocs python',
    url='https://github.com/cesbo/help/',
    author='Andrei Dyldin',
    author_email='and@cesbo.com',
    license='MIT',
    python_requires='>=3.6',
    install_requires=['mkdocs>=1.3.0'],
    packages=['contexty'],
    entry_points={
        'mkdocs.plugins': [
            'contexty = contexty:Widget',
        ],
    },
)
