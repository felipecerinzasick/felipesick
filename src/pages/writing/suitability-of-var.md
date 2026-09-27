---
layout: ../../layouts/Article.astro
title: "The suitability of VaR in managing economic uncertainty"
date: October 2024
summary: Value at Risk is useful because it is simple and interpretable, but its reliability depends on assumptions about market behaviour that often fail when risk matters most.
---

Value at Risk (VaR) is a statistical measure used to assess the level of financial risk within an investment portfolio over a specific time frame. This metric is particularly popular among risk managers and investors to quantify the potential loss in an investment and to make informed decisions to mitigate excessive risks.

VaR is calculated for a given portfolio, probability, and time period and can be applied using different models, depending on the nature of the portfolio’s assets and the data available. In essence, VaR provides a straightforward and easily interpretable estimate of financial risk.

One common approach to calculate VaR is the Parametric, or Variance-Covariance, method:

```text
VaR = μ - Z × σ
```

Where:

- **μ** represents the mean, or expected return, of the portfolio. It is a measure of the central tendency of the portfolio’s returns and gives an idea of what investors might typically expect to earn over a given period.
- **Z** is the Z-score that corresponds to the desired confidence level in the standard normal distribution. For example, a 95 % confidence level corresponds to a Z-score of approximately 1.65. This score reflects how far away from the mean a certain percentage of the performance will lie under normal distribution assumptions.
- **σ** is the standard deviation of the portfolio returns, which measures the amount of variation or dispersion from the mean. A higher σ indicates a higher risk or more uncertainty about the returns.

## Example

Consider a portfolio with five positions and their returns:

| Position | Portfolio weight | 6-month return |
| --- | ---: | ---: |
| Stock A | 5.66 % | -11.16 % |
| Stock B | 5.92 % | +2.37 % |
| Stock C | 5.98 % | +19.72 % |
| Stock D | 7.23 % | +15.72 % |
| Stock E | 75.20 % | -12.19 % |

This portfolio is considered particularly risky, largely because it is heavily influenced by one stock that has experienced the largest decline over the last six months. VaR is calculated to determine the maximum expected loss over a specified period under normal market conditions, typically set at a confidence level of 95 %.

In practical terms, VaR estimates the maximum loss likely within a certain timeframe under usual market conditions, with a 95 % certainty. This means there is a 5 % chance that losses could exceed this estimated amount, representing a significant risk that needs careful management.

The Value at Risk for this portfolio is derived using the standard deviation of the portfolio’s returns. This measure, known as volatility, indicates the degree of variation in trading prices over time, with higher values denoting greater uncertainty and risk. Using the Parametric method, which assumes returns follow a normal distribution, I calculated a 95 % VaR of 2.78 % for the portfolio in MATLAB.

Despite the high confidence level, this still implies a tangible risk of about 5 % that actual losses could surpass this figure, particularly given the portfolio’s high concentration in one stock, which amplifies its risk profile.

## Historical Simulation Method

I now turn to a different method of computing VaR: the Historical Simulation Method. This method offers an alternative approach that does not rely on the assumption of normal distribution for returns, unlike the Parametric method. It uses actual historical returns data to directly model and simulate the range of potential future losses.

By directly sampling from past return data, this method accounts for all actual observed fluctuations and patterns, including those not typically captured by the normal distribution assumption, such as extreme values in the tails of the distribution.

Unlike the Parametric method, which calculates VaR using the mean and standard deviation of the portfolio returns, the Historical Simulation Method directly uses historical return data to empirically determine the potential losses. In MATLAB, the process is roughly the same but with the following difference. In formula terms, if R represents the sorted returns and n the total number of returns, then the VaR at a 95 % confidence level can be calculated as:

```text
VaR = -R⌈n × 0.05⌉
```

where R⌈n × 0.05⌉ is the return at the 5th percentile, and losses are considered positive values, hence the negative sign.

In the example, the computed 95 % VaR of the portfolio is 3.56 %. This indicates that under normal market conditions, there is only a 5 % chance that the portfolio will lose more than 3.56 % of its value over the period analyzed. This method does not assume a normal distribution of returns, making it suitable for portfolios with assets that exhibit non-linear behaviours or fat tails.

## Concerns with the VaR framework

The Value at Risk framework, while widely adopted for its simplicity and clear output, inherently carries several significant assumptions and limitations that may affect its accuracy and reliability in risk assessment. A critical examination of these concerns is essential for both academics and practitioners to comprehend and improve upon the existing models.

### Assumption of normal distribution

One fundamental assumption of the Parametric VaR, also known as the Variance-Covariance approach, is that it relies on the returns of the portfolio being normally distributed. This assumption simplifies the computation of VaR, making it straightforward and computationally efficient.

However, financial markets often exhibit returns that deviate significantly from normality, characterized by skewness and kurtosis. The reliance on normal distribution assumptions means that the model may not accurately capture the risks in markets where extreme events occur more frequently than predicted by a normal distribution. These are precisely the types of risks that financial managers need to hedge against, making the underestimate or overestimate of risk a critical flaw in the VaR model.

In the classical financial model, the temporal variation of speculative prices assumes that successive changes are independent Gaussian random variables [1]. However, it has been well documented that this assumption often fails in real-world data. Mandelbrot (1997) points out several ways in which price changes deviate from this model, particularly noting the frequent occurrence of large price changes, the leptokurtic nature of returns, and the dependence between successive price changes.

### Estimation of future returns from historical data

Another core aspect of the VaR framework is its dependence on historical returns to estimate future risks. The mean of the portfolio’s returns, which is crucial in the calculation of Parametric VaR, is typically derived from historical data under the assumption that past patterns will persist.

This method of estimating future returns from historical data inherently assumes that market conditions and volatility patterns will remain consistent, which is often not the case. We have heard too often that past performance is no reliable indication for future returns.

The use of historical returns to forecast future risks assumes that financial markets are stationary and that historical volatilities and correlations will remain valid in the future. This assumption is problematic in dynamic financial environments where market conditions, regulatory frameworks, and economic factors are in constant flux.

### Volatility as a measure of uncertainty

In the Parametric VaR model, volatility, measured as the standard deviation of returns, is a key factor in estimating risk. This measure assumes that higher volatility equates to higher risk. While this may be valid for measuring dispersion of returns, it overlooks the fact that in financial markets, volatility can also attract investment flows, potentially leading to higher prices and returns.

This aspect highlights a fundamental flaw in the VaR model: it views volatility solely as a source of uncertainty and risk, neglecting its role as a catalyst in financial markets. High volatility may lead to increased trading volumes and could attract more investors, who see the potential for higher returns in volatile assets. Thus, the assumption that volatility is always a negative force can lead to misrepresentations in risk assessment, particularly in assets where price movements are both rapid and significant.

## Discussion

The practical application of VaR in assessing potential financial losses within a portfolio demonstrates a nuanced approach to risk management. While VaR is a valuable tool that quantifies potential losses under normal market conditions, its effectiveness hinges significantly on the assumptions of risk tolerance and the temporal context within which these risks are evaluated. This metric allows investors to gauge the extent of losses that may be sustained over a specified period and within a given confidence interval, typically showcasing what might occur 95 % of the time.

By integrating historical simulations and parametric methods, I highlight how different VaR computation methods have their strengths and limitations. Each method provides a different lens through which potential financial exposure is examined, underscoring the importance of choosing the appropriate model based on the specific characteristics and risk profiles of the assets involved.

While VaR can signal potential financial pitfalls, its predictive power may falter under extreme market conditions. This is particularly evident in portfolios with high concentrations in specific assets, where VaR might underestimate the potential for substantial losses, as observed with significant holdings that heavily influence overall risk metrics.

Therefore, while VaR is instrumental in shaping risk management strategies, it must be integrated with other risk assessment tools and accompanied by robust financial acumen to effectively navigate the complexities of modern investment landscapes. It is important to continually update and test risk assessment models against real-world outcomes and stress conditions. Approaches need to be robust enough to handle anomalies and extreme market conditions not typically captured by traditional statistical models.

As financial markets evolve, so too must the tools and theories we rely on to understand and mitigate risks. Relying solely on historical data to forecast future outcomes may be too simplistic. An effective approach requires VaR calculations with a critical mindset, particularly when applied to complex and dynamic financial markets where past performance is not always indicative of future results.

In the face of market turbulence, such as sudden price drops triggered by extensive selling pressures, VaR may not fully capture the extreme risks, making it difficult for investors to maintain a strategic stance during downturns. I conclude that VaR requires a discerning approach, enriched with a deep understanding of both its capabilities and its boundaries. This will ensure that risk management remains a dynamic and responsive tool, capable of withstanding the tests posed by ever-evolving financial markets.

## References

[1] B. B. Mandelbrot, *The Variation of Certain Speculative Prices*, Fractals and Scaling in Finance: Discontinuity, Concentration, Risk. Selecta Volume E, Springer New York, 1997, pp. 371-418.

---

*Informational only, not investment advice.*
