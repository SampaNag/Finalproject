import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import utils.Hooks;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"html:output"},
        tags = {"@register"},
        features = "src/test/resources"
)





public class RunTest  extends Hooks{
}
