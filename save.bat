git stage .
if "%~1"=="" goto :default else goto :save

:save
    git commit -m "%~1"
    goto end

:default
    git commit -m "Auto-commit by save"
    goto end

:end
    git push origin master