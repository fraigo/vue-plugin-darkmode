#!/bin/bash
if [ "$1" == "" ]; then
	echo "Usage: $0 patch|minor|major|version_number"
    echo "version_number should be in the format x.y.z"
	exit 1
fi

VERSION=$1
npm version $VERSION && git commit -m "Version update $VERSION"
npm publish